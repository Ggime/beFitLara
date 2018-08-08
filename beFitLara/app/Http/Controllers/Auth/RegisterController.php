<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
      $mensajes = [
        'name.required' => 'Ingresa tu Nombre',
        'apellido.required' => 'Ingresa tu Apellido',
        'telefono.required' => 'Ingresa tu Telefono',
        'telefono.numeric' => 'Debe ser numerico',
        'email.required' => 'Ingresa tu Email',
        'email.unique' => 'El email ya esta regitrado',
        'edad.required' => 'Ingresa tu Edad',
        'password.required' => 'Ingresa tu clave',
      ];
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'telefono'=> 'required|numeric|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'edad' => 'required|string|max:15',
            'barrio_id' => 'nullable',
            'password' => 'required|string|min:6|confirmed',
            //'avatar' => 'nullable|string|max:255',
        ], $mensajes);


    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'apellido' => $data['apellido'],
            'telefono' => $data['telefono'],
            'email' => $data['email'],
            'edad' => $data['edad'],
            'barrio_id' => $data['barrio_id'],
            'password' => Hash::make($data['password']),
            //'avatar' => $data['avatar'],
        ]);
    }
}
