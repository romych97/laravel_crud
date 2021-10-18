<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use DB;

class rvcGoodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rvc_goods')->insert([
            'id' => rand(),
            'created' => null,
            'changed' => null,
            'status' => 'success',
            'status-comment' => 'success',
            'site-id' => rand(),
            'brand' => Str::random(10),
            'item' => Str::random(7).' '.Str::random(7),
            'category-id' => rand(),
            'sku' => Str::random(10),
            'asin' => Str::random(10),
            'stock' => rand(0, 5),
            'on-off' => 1,
            'json' => ''
        ]);
    }
}
