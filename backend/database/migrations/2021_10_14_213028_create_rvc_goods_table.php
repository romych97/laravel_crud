<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRvcGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rvc_goods', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->default('1980-05-25 03:00:00');
            $table->timestamp('changed')->useCurrent();
            $table->enum('status', ['undefined', 'success', 'suspended', 'removed', 'error'])->default('undefined')->index('status');
            $table->string('status-comment', 96)->default('');
            $table->unsignedInteger('site-id')->default('000000000');
            $table->string('brand', 32);
            $table->string('item', 64);
            $table->unsignedInteger('category-id')->default('000000000');
            $table->string('sku', 16);
            $table->string('asin', 16);
            $table->smallInteger('stock');
            $table->tinyInteger('on-off');
            $table->text('json');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rvc_goods');
    }
}
