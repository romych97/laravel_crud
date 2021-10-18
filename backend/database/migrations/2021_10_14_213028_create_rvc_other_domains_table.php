<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRvcOtherDomainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rvc_other-domains', function (Blueprint $table) {
            $table->string('domain', 32);
            $table->unsignedInteger('site-id');
            $table->enum('from', ['postcard', 'sticker', 'get1free']);

            $table->index(['site-id', 'from'], 'site-id + from');
            $table->unique(['domain', 'site-id'], 'domain + site-id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rvc_other-domains');
    }
}
