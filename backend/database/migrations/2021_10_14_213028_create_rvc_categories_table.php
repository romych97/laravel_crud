<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRvcCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rvc_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->default('1980-05-25 03:00:00');
            $table->timestamp('changed')->useCurrent();
            $table->enum('status', ['undefined', 'success', 'suspended', 'error'])->default('undefined')->index('status');
            $table->string('status-comment', 96)->default('');
            $table->string('title', 32)->unique('title');
            $table->unsignedInteger('user-id')->default('000000000');
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
        Schema::dropIfExists('rvc_categories');
    }
}
