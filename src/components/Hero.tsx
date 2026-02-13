import React from "react";
import deiminthero from "../assets/deiminthero.jfif";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F0FFF1] to-[#C2F8CB]/30 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#5603AD] leading-tight font-poppins">
            Digital & Traditional
            <span className="block font-semibold italic bg-gradient-to-r from-[#8367C7] to-[#5603AD] bg-clip-text text-transparent">
              Art that Tells Stories
            </span>
          </h1>

          <p className="text-neutral-700 text-lg max-w-xl mx-auto md:mx-0 font-dmsans">
            Blending imagination with technique, I create expressive artworks
            across digital illustrations and traditional mediums.
            <span className="block mt-2 font-inter text-base text-neutral-600">
              Every piece carries emotion, depth, and narrative.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-poppins">
            
              <a href="#gallery"
              className="px-6 py-3 bg-gradient-to-r from-[#8367C7] to-[#5603AD] text-white rounded-full hover:shadow-lg hover:shadow-[#8367C7]/40 transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </a>

            
              <a href="#request-commission"
              className="px-6 py-3 border-2 border-[#8367C7] text-[#5603AD] rounded-full hover:bg-[#B3E9C7]/30 transition-all duration-300 hover:scale-105"
            >
              Commission Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#B3E9C7]">
            <img
              src={deiminthero}
              alt="Featured Artwork"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Decorative floating accents */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#C2F8CB] to-[#8367C7] rounded-3xl -z-10 blur-2xl opacity-50"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#8367C7] to-[#5603AD] rounded-full -z-10 blur-xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;