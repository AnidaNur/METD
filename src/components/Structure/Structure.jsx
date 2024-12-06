import React from "react";
import Struktur from "../../assets/struktur.png";

const Structure = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center relative duration-200">
      <div className="container px-4 sm:px-6 lg:px-8 py-4 mx-auto">
        {/* Grid text image */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
          {/* Text content section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-6 text-center sm:text-left pl-4 sm:pl-6 md:pl-8 lg:pl-12"
          >
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4  transform transition duration-700 ease-in-out hover:scale-110">
              Struktur
            </h1>
          </div>

          <div className="flex justify-center sm:justify-center">
            <img
              src={Struktur}
              alt="Struktur"
              className="w-[900px] sm:w-[1000px] md:w-[1100px] lg:w-[1200px] h-auto mx-auto rounded-3xl object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className=" fill-white"
            transform="scale(1, -1) translate(0, -120)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Structure;
