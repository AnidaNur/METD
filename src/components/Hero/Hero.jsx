import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Room1 from "../../assets/Room1.jpg";
import Room2 from "../../assets/Room2.jpeg";
import Room3 from "../../assets/Room3.jpeg";

const Hero = () => {
  const slides = [
    { image: Room1, alt: "Room 1" },
    { image: Room2, alt: "Room 2" },
    { image: Room3, alt: "Room 3" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center relative" id="Home">
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
              className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-primary opacity-50"></div>
              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white">
                  Selamat datang di
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug text-white">
                  PT MENJANGAN ENAM
                </h1>
                <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-white">
                  <span className="text-secondary">Trading</span> and{" "}
                  <span className="text-secondary">Distribution</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mt-4">
                  Merupakan suatu perusahaan trading dan distribusi produk kesehatan
                  yang terpercaya dan berkualitas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
            transform="scale(1, -1) translate(0, -120)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
