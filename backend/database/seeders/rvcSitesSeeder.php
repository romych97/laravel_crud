<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use DB;

class rvcSitesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rvc_sites')->insert([
            'id' => rand(),
            'created' => null,
            'changed' => null,
            'status' => 'success',
            'domain' => Str::random(10).'.com',
            'brand' => Str::random(10),
            'username' => Str::random(7).' '.Str::random(7),
            'mail' => Str::random(10).'@gmail.com',
            'password' => Str::random(10),
            'json' => ''
        ]);
    }
}
