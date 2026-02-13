import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-neutral-100 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight">
            Digital & Traditional
            <span className="block font-semibold italic">
              Art that Tells Stories
            </span>
          </h1>

          <p className="text-neutral-600 text-lg max-w-xl mx-auto md:mx-0">
            Blending imagination with technique, I create expressive artworks
            across digital illustrations and traditional mediums.
            Every piece carries emotion, depth, and narrative.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#gallery"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition duration-300"
            >
              View Gallery
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-400 rounded-full hover:bg-neutral-200 transition duration-300"
            >
              Commission Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/hero-art.jpg" // replace with actual artwork image
              alt="Featured Artwork"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Decorative floating accent */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neutral-300 rounded-3xl -z-10 blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
