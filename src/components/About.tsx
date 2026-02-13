import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/artist.jpg" // replace with actual artist image
            alt="Artist Portrait"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light text-neutral-900">
            About <span className="font-semibold italic">The Artist</span>
          </h2>

          <p className="text-neutral-700 leading-relaxed">
            I am a multidisciplinary artist specializing in both digital and
            traditional mediums. My work explores emotion, storytelling, and
            atmosphere — blending classical techniques with modern tools.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            From charcoal sketches to fully rendered digital illustrations, each
            piece reflects my passion for detail, composition, and narrative
            expression.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition duration-300"
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
