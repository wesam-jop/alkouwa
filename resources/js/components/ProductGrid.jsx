import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductGrid() {
    const BASE_URL = "https://alkouwa.store";

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/api/categories`);
                if (!response.ok) throw new Error("فشل جلب الأقسام");
                const data = await response.json();
                const cats = Array.isArray(data.categories)
                    ? data.categories
                    : [];
                setCategories(cats);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, [BASE_URL]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url =
                    selectedCategoryId !== null
                        ? `${BASE_URL}/api/products?category=${encodeURIComponent(
                              selectedCategoryId
                          )}`
                        : `${BASE_URL}/api/products`;
                const response = await fetch(url);
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(
                        errorData.message ||
                            `فشل جلب المنتجات (حالة: ${response.status})`
                    );
                }
                const data = await response.json();
                const prods = Array.isArray(data.data)
                    ? data.data
                    : Array.isArray(data)
                    ? data
                    : [];
                setProducts(prods);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [selectedCategoryId, BASE_URL]);

    useEffect(() => {
        if (selectedCategoryId === null) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) =>
                    product.category.toLowerCase() ===
                    selectedCategoryId.toLowerCase()
            );
            setFilteredProducts(filtered);
        }
    }, [products, selectedCategoryId]);

    const onBack = () => setSelectedProduct(null);
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleRetry = () => {
        setError(null);
        setLoading(true);
        setSelectedCategoryId(null);
    };

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-[#f15a22]"></div>
                <p className="mt-4 text-gray-600">جارٍ التحميل...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-[#f15a22] text-white rounded hover:opacity-60 transition"
                >
                    إعادة المحاولة
                </button>
            </div>
        );
    }

    if (selectedProduct) {
        const product = selectedProduct;
        const priceNumber = Number(product.price);
        const isAvailable = product.status === "active";
        return (
            <section
                id="productDetail"
                className="container mx-auto px-4 py-12"
            >
                <button
                    onClick={onBack}
                    className="flex items-center text-[#f15a22] gap-3 mb-8 hover:opacity-60 transition"
                >
                    الرجوع للخلف <i className="fas fa-arrow-left mr-2"></i>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-lg p-4">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {product.images?.length > 0 ? (
                            product.images.map((image, index) => (
                                <SwiperSlide key={image.path || index}>
                                    <img
                                        src={`${BASE_URL}/storage/${image.path}`}
                                        alt={`${product.title} - ${index + 1}`}
                                        className="w-full h-96 object-cover rounded-lg"
                                        loading="lazy"
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide key="placeholder">
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="غير متوفر"
                                    className="w-full h-96 object-cover rounded-lg"
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {product.title}
                            </h2>
                            <p className="text-green-800 font-bold mb-4">
                                ${priceNumber.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex items-center justify-start">
                            <p
                                className={`text-white text-xs font-bold px-2 py-1 rounded ${
                                    isAvailable ? "bg-green-500" : "bg-red-500"
                                }`}
                            >
                                {isAvailable ? "متوفر" : "غير متوفر"}
                            </p>
                        </div>
                        <p className="text-gray-600 mb-4">
                            {product.description?.replace(/<[^>]+>/g, "") ||
                                "لا يوجد وصف متاح"}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="productsGrid" className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">المنتجات</h2>

            {/* Tabs للأقسام */}
            <div className="flex flex-wrap gap-3 mb-8">
                <button
                    onClick={() => setSelectedCategoryId(null)}
                    className={`px-4 py-2 rounded-full border ${
                        selectedCategoryId === null
                            ? "bg-[#f15a22] text-white"
                            : "bg-white text-gray-800 border-gray-300"
                    } hover:opacity-80 transition`}
                >
                    الكل
                </button>
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <button
                            key={`category-${index}`}
                            onClick={() => setSelectedCategoryId(category)}
                            className={`px-4 py-2 rounded-full border ${
                                selectedCategoryId === category
                                    ? "bg-[#f15a22] text-white"
                                    : "bg-white text-gray-800 border-gray-300"
                            } hover:opacity-80 transition`}
                        >
                            {category}
                        </button>
                    ))
                ) : (
                    <p className="text-gray-500">لا توجد أقسام متاحة</p>
                )}
            </div>
            {/* شبكة المنتجات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div
                            key={product.id ?? `product-${index}`}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={
                                        product.images?.[0]?.path
                                            ? `${BASE_URL}/storage/${product.images[0].path}`
                                            : "https://via.placeholder.com/300"
                                    }
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-0 left-0 m-2">
                                    <span
                                        className={`text-white text-xs font-bold px-2 py-1 rounded ${
                                            product.status === "active"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                    >
                                        {product.status === "active"
                                            ? "متوفر"
                                            : "غير متوفر"}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-green-800 font-bold">
                                        ${Number(product.price).toFixed(2)}
                                    </span>
                                    <button
                                        className="text-white px-4 py-2 rounded bg-[#f15a22] hover:opacity-60 transition"
                                        onClick={() =>
                                            handleViewDetails(product)
                                        }
                                    >
                                        عرض التفاصيل
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        لا توجد منتجات في هذا القسم.
                    </p>
                )}
            </div>
        </section>
    );
}
