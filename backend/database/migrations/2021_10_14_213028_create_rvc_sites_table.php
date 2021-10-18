<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRvcSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rvc_sites', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->default('1980-05-25 03:00:00');
            $table->timestamp('changed')->useCurrent();
            $table->enum('status', ['undefined', 'success', 'suspended', 'error'])->default('undefined')->index('status');
            $table->string('status-comment', 96)->default('');
            $table->string('domain', 32)->unique('domain');
            $table->string('brand', 32);
            $table->string('username', 32);
            $table->string('mail', 32);
            $table->string('password', 16);
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
        Schema::dropIfExists('rvc_sites');
    }
}
