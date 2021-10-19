<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippedOrders extends Model
{
    use HasFactory;

    const CREATED_AT = 'created';
    const UPDATED_AT = 'changed';

    protected $fillable = ['host', 'sku'];
    protected $table = 'site_shipped-orders';
}
