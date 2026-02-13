import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="text-4xl font-light text-neutral-900">
          Get in <span className="font-semibold italic">Touch</span>
        </h2>

        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
          Interested in commissions, collaborations, or custom artwork?
          Feel free to reach out — I’d love to hear about your project.
        </p>

        {/* Contact Form */}
        <form className="mt-12 space-y-6 text-left">
          
          <div>
            <label className="block text-sm text-neutral-600 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
