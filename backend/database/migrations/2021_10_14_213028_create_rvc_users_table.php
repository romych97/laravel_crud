<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRvcUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rvc_users', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->default('1980-05-25 03:00:00');
            $table->timestamp('changed')->useCurrent();
            $table->enum('status', ['undefined', 'success', 'suspended', 'error'])->default('undefined')->index('status');
            $table->string('status-comment', 96)->default('');
            $table->string('name', 32)->unique('name');
            $table->char('sheet-google-id', 44);
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
        Schema::dropIfExists('rvc_users');
    }
}
