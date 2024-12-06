import React from "react";
import Logo from "../../assets/logo.jpeg";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]" id="About">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 mt-8">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container px-4 sm:px-6 lg:px-8 mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={Logo}
                  alt="Logo img"
                  className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-full mx-auto rounded-lg shadow-lg object-contain"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary transform transition duration-700 ease-in-out hover:scale-110">
                  PT MENJANGAN ENAM TRADING AND DISTRIBUTION
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black tracking-wide leading-6 lg:leading-8">
                  Koperasi Menjangan Enam (KOP ME), yang didirikan pada 1980 di
                  lingkungan PT Phapros Tbk, awalnya bertujuan memenuhi
                  kebutuhan internal perusahaan. Seiring waktu, KOP ME
                  mengembangkan berbagai unit usaha seperti simpan pinjam,
                  perumahan, toko, apotek, penyewaan mobil, fotocopy, dan
                  distribusi produk (PBF ME).
                  <br />
                  <br />
                  Pada Desember 2015, KOP ME mendirikan PBF ME untuk mendukung
                  distribusi produk PT Phapros Tbk, khususnya Antimo, ke pasar
                  modern seperti Indomaret, Alfamart, dan lainnya. Filosofi logo
                  KOP ME yang menggambarkan "Ranggah Menjangan" mencerminkan
                  keberagaman unit usaha KOP ME yang terus berkembang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
