export default function Footer() {
    const phoneNumber = "963980352758";
    const email = "alkouwarealestate@gmail.com";
    const title = "شركة القوة للإنشاءات";
    return (
        <footer className="bg-white text-[#f15a22] py-8 mt-12 shadow-2xl shadow-[#f15a22] bg-gradient-to-r from-[#f15a22] via-gray-200 to-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{title}</h3>
                        <p className="text-[#090f10]" style={{ lineHeight: 3 }}>
                            منذ انطلاقتها عام 2020، تميزت شركة القوة للإنشاءات
                            بريادتها في عالم الإكساء والديكور، حيث تجمع بين
                            الخبرة الهندسية والاحتراف الإداري لتقديم خامات عصرية
                            وتنفيذ راقٍ بأعلى معايير الجودة.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
                        <p className="text-[#090f10] mb-2 gap-2 flex items-start">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            سوريا . محافظة ادلب . سرمدا.
                        </p>
                        <div className="text-[#090f10] mb-2 gap-2 flex items-center">
                            <i className="fas fa-phone mr-2"></i>
                            <div>
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="underline"
                                >
                                    <span>{phoneNumber}</span>
                                    <span>+</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-[#090f10] mb-2 gap-2 flex items-center">
                            <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
                            <div>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=352681580199&text&type=phone_number&app_absent=0"
                                    className="underline"
                                >
                                    <span>352681580199</span>
                                    <span>+</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-[#090f10] mb-2 gap-2 flex items-center">
                            <i class="fa-brands fa-facebook mr-2 text-lg"></i>
                            <div>
                                <span className="underline">
                                    <a href="https://www.facebook.com/profile.php?id=61573287860506&mibextid=wwXIfr&rdid=KIeU2H7mexUzyyvU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bmv6DPocH%2F%3Fmibextid%3DwwXIfr#">
                                        القوة للانشاءات
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="text-[#090f10] mb-2 gap-2 flex items-center">
                            <i class="fa-brands fa-instagram mr-2 text-lg"></i>
                            <div>
                                <span className="underline">
                                    <a href="https://www.instagram.com/guclu.insaat.sarmada.20?igsh=aWt6eWt2amFtbHdv&utm_source=qr">
                                        القوة للانشاءات
                                    </a>
                                </span>
                            </div>
                        </div>
                        <p className="text-[#090f10] mb-2 gap-2 flex items-center">
                            <i className="fas fa-envelope mr-2"></i>
                            <a className="underline" href={`mailto:${email}`}>
                                {email}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="border-t border-[#f15a22] mt-8 pt-6 text-center text-[#090f10]">
                    <p>
                        جميع الحقوق محفوظة {title} <span>2025 &copy;</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
