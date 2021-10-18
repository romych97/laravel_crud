<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Goods;

class GoodsController extends Controller
{
    public function index() {
        return [];
        // return new GoodsResource(Goods::all());
    }

    public function show($id) {
        // return new GoodsResource(Goods::findOrFail($id));
    }

    public function store(Request $request) {
        
        // return $request;

        // $request->validate([
        //     'name' => 'required|max:255',
        // ]);

        $good = Goods::create($request->all());

        return response(null, 201);
    }

    public function destroy($id) {
        $player = Goods::findOrFail($id);
        $player->delete();

        // return response()->json(null, 204);
        return response(null, 204);
    }

}
