import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
    return (
        <main>
            <Header />
            <ProductGrid />
            <Footer />
        </main>
    );
}

export default Home;
