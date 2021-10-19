<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Sites;

class SitesController extends Controller
{
    public function store(Request $request) {
        
        // return $request;

        // $request->validate([
        //     'name' => 'required|max:255',
        // ]);

        $site = Sites::create($request->all());

        return response($site, 201);
    }

    public function destroy($id) {
        $Sites = Sites::findOrFail($id);
        $Sites->delete();

        // return response()->json(null, 204);
        return response(null, 204);
    }

}
