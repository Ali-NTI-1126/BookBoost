<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|alpha',
            'email' => 'required|unique:users',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
            'password' => 'required|min:8|confirmed'
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->phone = $request->phone;
        $user->role_id = '4';
        $user->save();

        return response()->json(['message' => 'User registered successfully']);
    }

    public function login(Request $request)
{
    $request->validate([
        'email' => 'required',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid email or password'], 401);
    }

    $request->session()->put('loginId', $user->id);
    $request->session()->put('roleId', $user->role_id);

    switch ($user->role_id) {
        case 1:
            $role = 'admin';
            break;
        case 2:
            $role = 'hotel admin';
            break;
        case 3:
            $role = 'facility manager';
            break;
        default:
            $role = 'guest';
    }

    return response()->json(['message' => 'Login successful', 'role' => $role]);
}

}
