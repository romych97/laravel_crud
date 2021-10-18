<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

// use App\Http\Resources\Player as PlayerResource;
use App\Http\Resources\GoodsResource;

use App\Models\Goods;
use App\Models\Sites;
use App\Models\ShippedOrders;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index() {
        // return [];
        return [ 
                'goods' => Goods::all(), 
                'sites' => Sites::all(), 
                'shippedOrders' => ShippedOrders::all()
               ];
    }
}
