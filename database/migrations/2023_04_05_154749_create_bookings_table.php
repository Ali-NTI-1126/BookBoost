<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('booking_id');
            $table->date('booking_date');
            $table->date('booking_start_date');
            $table->date('booking_end_date');
            $table->unsignedInteger('booking_number_of_guests');
            $table->unsignedBigInteger('user_id');
           // $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('hotel_id');
          //  $table->foreign('hotel_id')->references('id')->on('hotels');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
