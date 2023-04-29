<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|alpha',
            'email' => 'required|unique:users,email|email:rfc,dns',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
            'password' => 'required|min:8|confirmed'
        ], [
            'name.required' => 'Please provide your name.',
            'name.alpha' => 'Name should only contain alphabetic characters.',
            'email.required' => 'Please provide your email address.',
            'email.unique' => 'This email address is already in use.',
            'email.email' => 'Please provide a valid email address.',
            'phone.required' => 'Please provide your phone number.',
            'phone.regex' => 'Please provide a valid phone number.',
            'phone.min' => 'Phone number should have at least 10 digits.',
            'phone.max' => 'Phone number should not exceed 15 digits.',
            'password.required' => 'Please provide a password.',
            'password.min' => 'Password should be at least 8 characters long.',
            'password.confirmed' => 'Passwords do not match.'
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->phone = $request->phone;
        $user->role_id = '4';
        $succesUser= $user->save();
        if ($succesUser) {
    
            Mail::to($user->email)->send(new WelcomeMail($user));

            return response()->json(['message' => 'User registered successfully']);
        }
    }

    public function showNames()
    {
        $users = User::select('name')->get();
        return response()->json($users);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email:rfc,dns',
            'password' => 'required'
        ], [
            'email.required' => 'Please provide your email address.',
            'email.email' => 'Please provide a valid email address.',
            'password.required' => 'Please provide a password.'
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
