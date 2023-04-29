<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function() {

    Route::post('/register',    [AuthController::class, 'register']);
    Route::get('/register',     [AuthController::class, 'showNames']);
    Route::post('/login',       [AuthController::class, 'login'])->name('login');
});

Route::group(['prefix' => 'admin'], function() {
    Route::get('/hotels',              [AdminController::class, 'getAllHotels']);
    Route::post('/hotels',              [AdminController::class, 'createHotel']);
    Route::put('/users/{id}/promote',   [AdminController::class, 'promoteUser']);
    Route::put('/users/{id}/downgrade', [AdminController::class, 'downgradeUser']);
    Route::put('/users/{id}/edit',      [AdminController::class, 'editUser']);
    Route::delete('/users/{id}',        [AdminController::class, 'deleteUser']);
});

Route::fallback(function () {
    $statusCode = app('Illuminate\Http\Response')->getStatusCode();

    $errorMessage = 'Resource not found.';
    $errorCode = 404;

    switch ($statusCode) {
        case 401:
            $errorMessage = 'Unauthorized access.';
            $errorCode = 401;
            break;
        case 403:
            $errorMessage = 'Forbidden access.';
            $errorCode = 403;
            break;
        case 500:
            $errorMessage = 'Server error.';
            $errorCode = 500;
            break;
    }

    return response()->json(['error' => $errorMessage], $errorCode);
});
