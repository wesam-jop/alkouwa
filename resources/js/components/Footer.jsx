import Logo from "../assets/images/logo.jpg";
export default function Footer() {
    const phoneNumber = "963958555250";
    const email = "gucluinsaat1990@gmail.com";
    const title = "القوة للإنشاءات";

    return (
        <footer className="bg-gradient-to-r from-[#f15a22] via-[#fff] to-[#fff] text-[#090f10] py-10 mt-12 shadow-2xl shadow-[#f15a22]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* الشركة */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#f15a22]">
                            {title}
                        </h3>
                        <img src={Logo} alt="Company Logo" className="w-32 mb-4" />
                        <p className="leading-7">
                            القوّة للإنشاءات منذ انطلاقتها عام 2020، تميزت بريادتها في عالم الإكساء والديكور，
                            حيث جمعت بين الخبرة الهندسية لتنفيذ راقٍ بأعلى معايير الجودة، والإحتراف الإداري
                            لتقديم خامات عصرية تناسب جميع المشاريع العقارية.
                        </p>
                    </div>

                    {/* التواصل */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#f15a22]">
                            تواصل معنا
                        </h3>

                        <div className="space-y-3">

                            {/* العنوان */}
                            <div className="flex items-start gap-3">
                                <i className="fas fa-map-marker-alt mt-1"></i>
                                <span>
                                    سوريا - إدلب - أوتستراد سرمدا الدانا - غرب دوار المولات 500 متر
                                </span>
                            </div>

                            {/* واتساب */}
                            <div className="flex items-center gap-3">
                                <i className="fab fa-whatsapp"></i>
                                <a
                                    href={`https://wa.me/${phoneNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#f15a22] transition"
                                >
                                    +{phoneNumber}
                                </a>
                            </div>

                            {/* الهاتف */}
                            <div className="flex items-center gap-3">
                                <i className="fas fa-phone"></i>
                                <a
                                    href={`tel:+${phoneNumber}`}
                                    className="hover:text-[#f15a22] transition"
                                >
                                    +{phoneNumber}
                                </a>
                            </div>

                            {/* فيسبوك */}
                            <div className="flex items-center gap-3">
                                <i className="fab fa-facebook"></i>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61580792525330"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#f15a22] transition"
                                >
                                    معرض هوم ديكور
                                </a>
                            </div>

                            {/* انستغرام */}
                            <div className="flex items-center gap-3">
                                <i className="fab fa-instagram"></i>
                                <a
                                    href="https://www.instagram.com/home.decor.sarmada/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#f15a22] transition"
                                >
                                    home.decor.sarmada
                                </a>
                            </div>

                            {/* الإيميل */}
                            <div className="flex items-center gap-3">
                                <i className="fas fa-envelope"></i>
                                <a
                                    href={`mailto:${email}`}
                                    className="hover:text-[#f15a22] transition"
                                >
                                    {email}
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* الفوتر السفلي */}
                <div className="border-t border-[#f15a22] mt-10 pt-6 text-center">
                    <p>
                        جميع الحقوق محفوظة {title} © 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}