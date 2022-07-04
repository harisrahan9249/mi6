<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class HomeController extends Controller
{
    public function index()
    {
        $person = Person::find(10);

        dd($person->aliases);
    }
}
