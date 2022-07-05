<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status');
        // dd($request->input('status'));
        if (!empty($status)) {
            $people = Person::with('aliases')
                ->where('status_id', '=', $status)
                ->get();
        } else {
            $people = Person::with('aliases')->get();
        }
        return $people;
    }
}
