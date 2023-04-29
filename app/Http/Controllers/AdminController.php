<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function getAllHotels(Request $request)
    {
        $hotels = Hotel::all();
        return response()->json(['hotels' => $hotels]);
    }

    public function createHotel(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
            'email' => 'required|email|unique:hotels,email',
        ]);

        $hotel = new Hotel;
        $hotel->name = $request->name;
        $hotel->address = $request->address;
        $hotel->phone = $request->phone;
        $hotel->email = $request->email;
        $hotel->save();

        return response()->json(['message' => 'Hotel created successfully']);
    }

    public function promoteUser(Request $request, $userId)
    {
        $user = User::findOrFail($userId);

        switch ($user->role_id) {
            case 1:
                $user->role_id = 2;
                $role = 'hotel admin';
                break;
            case 2:
                $user->role_id = 3;
                $role = 'facility manager';
                break;
                case 3:
                    $user->role_id = 1;
                    $role = 'admin';
                    break;
            default:
                return response()->json(['message' => 'Cannot promote user'], 400);
        }

        $user->save();

        return response()->json(['message' => 'User promoted to ' . $role]);
    }

    public function downgradeUser(Request $request, $userId)
    {
        $user = User::findOrFail($userId);

        switch ($user->role_id) {
            
            case 1:
                $user->role_id = 2;
                $role = 'hotel admin';
                break;
            case 2:
                $user->role_id = 3;
                $role = 'facility manager';
                break;
            default:
                return response()->json(['message' => 'Cannot downgrade user'], 400);
        }

        $user->save();

        return response()->json(['message' => 'User downgraded to ' . $role]);
    }

    public function editUser(Request $request, $userId)
    {
        $user = User::findOrFail($userId);

        $request->validate([
            'name' => 'required|string|alpha',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    public function deleteUser(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
