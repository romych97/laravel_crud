<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sites extends Model
{
    use HasFactory;
    
    const CREATED_AT = 'created';
    const UPDATED_AT = 'changed';

    protected $fillable = ['status', 'brand', 'domain', 'username'];

    protected $table = 'rvc_sites';
}
