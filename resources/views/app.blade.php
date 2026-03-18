<!DOCTYPE html>
<html dir="rtl">

<head>
    <title>Al-Quwwah / Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    <style>
        .swiper-button-next,
        .swiper-button-disabled,
        .swiper-button-prev,
        .swiper-pagination-.swiper-pagination-bullet-active {
            color: #f15a22 !important;
        }
        .swiper-pagination-bullet{
            width: 20px !important;
            border-radius: 20px !important;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active{
            background: #f15a22 !important
        }
    </style>
</head>

<body>
    @inertia
</body>

</html>
