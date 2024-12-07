import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product.jsx";
import Structure from "./components/Structure/Structure.jsx";
import Visi from "./components/Visi/Visi.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Visi />
      {/* <CoverBanner /> */}
      <Structure />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
