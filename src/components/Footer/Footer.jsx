import React from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-Tertiary">
      <section className="container mx-auto ml-auto lg:ml-40">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7 mb-6 w-full ml-auto">

          <div className="lg:col-span-4 col-span-12 mt-6">
            <p className="font-semibold mt-6 text-lg sm:text-xl md:text-2xl text-black">
              PT Menjangan Enam Trading and Distribution
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black">
              Distribusi produk kesehatan terpercaya dan berkualitas
            </p>
            <div className="mt-6">
              <p className="mb-3 text-sm sm:text-base md:text-lg text-black">
                <FaMobileAlt className="inline-block mr-2" /> 024-7611455
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black">
                <FaLocationArrow className="inline-block mr-2" />
                <a
                  href="mailto:menamtradis24@gmail.com"
                  className="hover:text-primary transition-all duration-500 ease-in-out"
                >
                  pt.metd25@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 md:col-span-4 col-span-12 mt-12">
            <h5 className="tracking-wide font-semibold text-lg sm:text-xl md:text-2xl text-black">
              Links
            </h5>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#Home"
                  className="hover:text-primary transition-all duration-500 ease-in-out text-sm sm:text-base md:text-lg text-black"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="hover:text-primary transition-all duration-500 ease-in-out text-sm sm:text-base md:text-lg text-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Product"
                  className="hover:text-primary transition-all duration-500 ease-in-out text-sm sm:text-base md:text-lg text-black"
                >
                  Product
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-12 mt-12">
            <h5 className="tracking-wide font-semibold text-lg sm:text-xl md:text-2xl text-black">
              Alamat
            </h5>
            <p className="text-sm sm:text-base md:text-lg text-black">
              Jl Puspowarno Raya Nomor 55D, Kec. Semarang Barat, Kota Semarang,
              Jawa Tengah 50141
            </p>
            <iframe
              className="w-full h-48 sm:h-56 lg:h-64 mt-3"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=450&amp;height=250&amp;hl=en&amp;q=Jl%20Puspowarno%20Raya%20Nomor%2055D,%20Semarang&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </section>

      <div className="bg-primary w-full text-center py-4">
        <p className="text-md sm:text-lg text-white">
          &copy; 2024 PT Menjangan Enam Trading and Distribution. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
