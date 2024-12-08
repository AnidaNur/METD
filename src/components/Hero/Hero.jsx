import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const slides = [
    { image: "/assets/Pict1.jpg", alt: "Gambar 1" },
    { image: "/assets/Pict2.jpeg", alt: "Gambar 2" },
    { image: "/assets/Pict3.jpeg", alt: "Gambar 3" },
  ];

  return (
    <div
      className="min-h-screen flex justify-center items-center relative"
      id="Home"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen flex justify-center items-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={slide.alt}
            >
              <div className="absolute inset-0 bg-primary/60"></div>

              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                  Selamat datang di
                </p>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  PT MENJANGAN ENAM
                </h1>
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">
                  <span className="text-secondary">Trading</span> and{" "}
                  <span className="text-secondary">Distribution</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4">
                  Merupakan suatu perusahaan trading dan distribusi produk
                  kesehatan yang terpercaya dan berkualitas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
