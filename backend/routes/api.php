<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// use App\Http\Controllers\GoodsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/all', 'App\Http\Controllers\Controller@index');
Route::get('/shippedOrders/search', 'App\Http\Controllers\ShippedOrdersController@search');

Route::delete('/goods/{id}', 'App\Http\Controllers\GoodsController@destroy');
Route::delete('/sites/{id}', 'App\Http\Controllers\SitesController@destroy');
Route::delete('/shippedOrders/{id}', 'App\Http\Controllers\ShippedOrdersController@destroy');

Route::post('/goods', 'App\Http\Controllers\GoodsController@store');
Route::post('/sites', 'App\Http\Controllers\SitesController@store');
Route::post('/shippedOrders', 'App\Http\Controllers\ShippedOrdersController@store');

Route::post('/goods/{id}', 'App\Http\Controllers\GoodsController@edit');
Route::post('/sites/{id}', 'App\Http\Controllers\SitesController@edit');
Route::post('/shippedOrders/{id}', 'App\Http\Controllers\ShippedOrdersController@edit');