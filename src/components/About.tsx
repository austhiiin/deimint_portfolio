import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#F0FFF1] to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl ring-2 ring-[#B3E9C7] relative group">
          {/* Placeholder for database image */}
          <div className="w-full h-[500px] bg-gradient-to-br from-[#C2F8CB] to-[#B3E9C7] flex items-center justify-center">
            <div className="text-center text-[#8367C7] font-poppins">
              <svg className="w-20 h-20 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Artist Photo from Database</span>
            </div>
          </div>
          {/* Uncomment when connecting to database:
          <img
            src="" // Connect to database
            alt="Artist Portrait"
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          */}
          
          {/* Decorative floating accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#8367C7] to-[#5603AD] rounded-full -z-10 blur-2xl opacity-40"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light text-[#5603AD] font-poppins">
            About <span className="font-semibold italic bg-gradient-to-r from-[#8367C7] to-[#5603AD] bg-clip-text text-transparent">The Artist</span>
          </h2>

          <p className="text-neutral-700 leading-relaxed font-dmsans text-lg">
            I am a multidisciplinary artist specializing in both digital and
            traditional mediums. My work explores emotion, storytelling, and
            atmosphere — blending classical techniques with modern tools.
          </p>

          <p className="text-neutral-600 leading-relaxed font-inter">
            From charcoal sketches to fully rendered digital illustrations, each
            piece reflects my passion for detail, composition, and narrative
            expression.
          </p>

          <div className="pt-4 flex gap-4">
            
              <a href="#request-commission"
              className="px-6 py-3 bg-gradient-to-r from-[#8367C7] to-[#5603AD] text-white rounded-full hover:shadow-lg hover:shadow-[#8367C7]/40 transition-all duration-300 hover:scale-105 font-poppins font-medium"
            >
              Let's Work Together
            </a>
            
              <a href="#gallery"
              className="px-6 py-3 border-2 border-[#8367C7] text-[#5603AD] rounded-full hover:bg-[#B3E9C7]/30 transition-all duration-300 hover:scale-105 font-poppins font-medium"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;