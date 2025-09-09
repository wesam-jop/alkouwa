<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth:sanctum');
Route::apiResource('products', \App\Http\Controllers\ProductController::class)->only(['index', 'show']);
Route::apiResource('products', \App\Http\Controllers\ProductController::class)->only(['store', 'update', 'destroy'])->middleware('auth:sanctum');
Route::apiResource('categories', \App\Http\Controllers\CategoryController::class)->only(['store', 'update', 'destroy'])->middleware('auth:sanctum');
Route::apiResource('categories', \App\Http\Controllers\CategoryController::class)->only(['index','show']);