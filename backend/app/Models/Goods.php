<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    use HasFactory;

    const CREATED_AT = 'created';
    const UPDATED_AT = 'changed';

    protected $fillable = ['title', 'brand', 'item', 'stock', 'sku', 'status'];

    protected $table = 'rvc_goods';

    // public $timestamps = false;

    // protected $softDelete = false;
}
