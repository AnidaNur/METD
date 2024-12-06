import React from "react";
import Dus from "../../assets/Cargo.jpg";

const Visi = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center duration-200">
      <div className="container px-4 sm:px-6 lg:px-8 py-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-6 text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-12"
          >
            <div>
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary transform transition duration-700 ease-in-out hover:scale-110">
                VISI
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Menjadikan perusahaan trading dan distribusi produk kesehatan
                yang terpercaya dan berkualitas serta turut berperan aktif dalam
                membangun kesehatan bangsa.
              </p>
            </div>
            <div className="mt-6">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary transform transition duration-700 ease-in-out hover:scale-110">
                MISI
              </h1>
              <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                <li>Memberikan pelayanan yang prima kepada pelanggan.</li>
                <li>
                  Memenuhi permintaan pasar terhadap produk kesehatan yang
                  berkualitas dengan menerapkan standar Cara Distribusi Obat
                  yang baik (CDOB).
                </li>
                <li>
                  Membangun usaha dengan meningkatkan kompetensi dan kualitas
                  serta produktivitas sumber daya manusia.
                </li>
              </ul>
            </div>
          </div>
          {/* Image section */}
          <div className="flex justify-center lg:justify-end ">
            <img
              src={Dus}
              alt="Dus img"
              className="w-48 sm:w-64 md:w-80 lg:w-[450px] xl:w-[500px] h-auto mx-auto rounded-3xl object-contain shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visi;
