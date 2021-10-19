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

    public function edit(Request $request, $id) {

        Goods::whereId($id)->update($request->all());
        $selection = Goods::find($id);
        $selection->update($request->all());

        return response($request, 201);
    }

    public function store(Request $request) {
        
        // return $request;

        // $request->validate([
        //     'name' => 'required|max:255',
        // ]);

        $good = Goods::create($request->all());

        return response($good, 201);
    }

    public function destroy($id) {
        $player = Goods::findOrFail($id);
        $player->delete();

        // return response()->json(null, 204);
        return response(null, 204);
    }

}
