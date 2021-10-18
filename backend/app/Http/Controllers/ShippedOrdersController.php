<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ShippedOrders;

class ShippedOrdersController extends Controller {
 
    public function search(Request $request){

        // Get the search value from the request
        $search = $request->input('search');
    
        // Search in the title and body columns from the posts table
        $results = ShippedOrders::where('num', 'LIKE', "%{$search}%")->get();
        
        // Return the search view with the resluts compacted
        return $results;
        // return [];
    }
}
