import React, { useEffect, useState, useRef } from "react";

const Menu = [
  { id: 1, name: "Home", link: "#Home" },
  { id: 2, name: "About", link: "#About" },
  { id: 3, name: "Product", link: "#Product" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      let currentActive = null;

      Menu.forEach((menu) => {
        const section = document.querySelector(menu.link);
        if (section) {
          const sectionOffset = section.offsetTop - headerHeight;
          const sectionHeight = section.offsetHeight;

          if (
            currentScrollPosition >= sectionOffset - sectionHeight / 3 &&
            currentScrollPosition < sectionOffset + sectionHeight
          ) {
            currentActive = menu.id;
          }
        }
      });

      setActiveMenu(currentActive);
    };

    const debounceScroll = () => {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => handleScroll(), 100);
    };

    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", debounceScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="shadow-md bg-white fixed top-0 left-0 w-full z-50 duration-200">
        <div className="container mx-auto flex items-center py-4 px-6">
          <a
            href="#"
            className="font-semibold text-xl sm:text-2xl flex gap-2 items-center"
          >
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            MENJANGAN ENAM
          </a>

          <div className="ml-auto hidden sm:flex gap-6 items-center">
            <ul className="flex gap-6">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    onClick={() => setActiveMenu(menu.id)}
                    className={`text-lg font-semibold rounded-md transition-all px-3 py-1 
                      ${
                        activeMenu === menu.id
                          ? "bg-secondary text-dark"
                          : "hover:bg-secondary"
                      }`}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl ml-auto focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  onClick={() => {
                    setActiveMenu(menu.id);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-semibold rounded-md transition-all px-3 py-1 
                    ${
                      activeMenu === menu.id
                        ? "bg-secondary text-dark"
                        : "hover:bg-secondary"
                    }`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
