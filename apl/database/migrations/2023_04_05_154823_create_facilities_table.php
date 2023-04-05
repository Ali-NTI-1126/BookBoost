<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('facilities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('facility_name')->notNull();
            $table->text('facility_description')->notNull();
            $table->string('facility_address')->notNull();
            $table->string('facility_direction')->nullable();
            $table->integer('facility_capacity')->nullable();
            $table->string('facility_opening_hours')->nullable();
            $table->unsignedBigInteger('hotel_id');
           // $table->foreign('hotel_id')->references('id')->on('hotels');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};
