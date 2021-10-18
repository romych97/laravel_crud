<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteShippedOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_shipped-orders', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->default('1980-05-25 03:00:00')->index('created');
            $table->timestamp('changed')->default('1980-05-25 03:00:00')->index('changed');
            $table->string('host', 32);
            $table->string('refer', 32);
            $table->char('num', 19);
            $table->string('scheme', 16)->default('');
            $table->enum('status', ['new', 'in-table', 'not-need'])->index('status');
            $table->enum('users', ['new', 'in-table', 'not-need'])->index('users');
            $table->enum('sendings', ['new', 'in-table', 'not-need'])->index('sendings');
            $table->set('flags', ['olga'])->default('');
            $table->string('sku', 32);
            $table->enum('off-status', ['undefined', 'on', 'off'])->default('undefined');
            $table->unsignedSmallInteger('stars');
            $table->string('email', 60);
            $table->string('gift-card', 32)->nullable();
            $table->string('address', 200)->nullable();
            $table->string('screen', 200)->nullable();

            $table->unique(['num', 'sku'], 'num + sku');
            $table->index(['host', 'email'], 'host + email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_shipped-orders');
    }
}
