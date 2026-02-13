import React, { useState } from "react";
import deimint from "../assets/deimint.jfif";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#F0FFF1]/80 border-b border-[#C2F8CB]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Artist Name */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C2F8CB] to-[#8367C7] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={deimint}
                alt="Deimint"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-[#B3E9C7] relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-2xl font-semibold tracking-wide font-poppins">
              <span className="bg-gradient-to-r from-[#5603AD] to-[#8367C7] bg-clip-text text-transparent">
                deimint
              </span>
            </div>
          </a>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#5603AD] transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#5603AD] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#5603AD] transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide font-poppins">
            <a
              href="#home"
              className="relative text-[#5603AD] hover:text-[#8367C7] transition duration-300 group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#8367C7] to-[#5603AD] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              className="relative text-[#5603AD] hover:text-[#8367C7] transition duration-300 group"
            >
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#8367C7] to-[#5603AD] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="relative text-[#5603AD] hover:text-[#8367C7] transition duration-300 group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#8367C7] to-[#5603AD] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#commissions"
              className="relative text-[#5603AD] hover:text-[#8367C7] transition duration-300 group"
            >
              Commissions
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#8367C7] to-[#5603AD] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#track-order"
              className="relative text-[#5603AD] hover:text-[#8367C7] transition duration-300 group"
            >
              Track Order
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#8367C7] to-[#5603AD] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#request-commission"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8367C7] to-[#5603AD] text-white hover:shadow-lg hover:shadow-[#8367C7]/30 transition-all duration-300 hover:scale-105"
            >
              Request Commission
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#F0FFF1]/80 backdrop-blur-md border-b border-[#C2F8CB] py-4`}
        >
          <div className="flex flex-col space-y-4 px-6 text-sm font-medium tracking-wide font-poppins">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-[#5603AD] hover:text-[#8367C7] transition duration-300"
            >
              Home
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="text-[#5603AD] hover:text-[#8367C7] transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-[#5603AD] hover:text-[#8367C7] transition duration-300"
            >
              About
            </a>
            <a
              href="#commissions"
              onClick={() => setIsOpen(false)}
              className="text-[#5603AD] hover:text-[#8367C7] transition duration-300"
            >
              Commissions
            </a>
            <a
              href="#track-order"
              onClick={() => setIsOpen(false)}
              className="text-[#5603AD] hover:text-[#8367C7] transition duration-300"
            >
              Track Order
            </a>
            <a
              href="#request-commission"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8367C7] to-[#5603AD] text-white hover:shadow-lg hover:shadow-[#8367C7]/30 transition-all duration-300 hover:scale-105 text-center"
            >
              Request Commission
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;