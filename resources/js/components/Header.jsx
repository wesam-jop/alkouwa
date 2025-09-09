// import { useCart } from "../context/CartContext";

export default function Header() {
    // const { getCartCount } = useCart();
    const title = "شركة القوة للإنشاءات";
    return (
        <header className="bg-[#f15a22] shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">
                    {title}
                </a>
                {/* <div className="flex items-center gap-3">
          <div>
            <LanguageSwitcher />
          </div>
          <div>
            <button
              className="relative"
              onClick={() =>
                document.getElementById("cartModal").classList.remove("hidden")
              }
            >
              <i className="fas fa-shopping-cart text-gray-700 text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </button>
          </div>
        </div> */}
            </div>
        </header>
    );
}
