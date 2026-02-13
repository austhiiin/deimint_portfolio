import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-xl font-light text-white">
            <span className="italic font-light">Ar.</span> Canvas
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#gallery" className="hover:text-white transition">
              Gallery
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Ar. Canvas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
