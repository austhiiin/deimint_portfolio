import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#F0FFF1]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="text-4xl font-light text-[#5603AD] font-poppins">
          Get in <span className="font-semibold italic bg-gradient-to-r from-[#8367C7] to-[#5603AD] bg-clip-text text-transparent">Touch</span>
        </h2>

        <p className="mt-4 text-neutral-700 max-w-2xl mx-auto font-dmsans">
          Interested in commissions, collaborations, or custom artwork?
          <span className="block mt-2 text-neutral-600 font-inter text-sm">
            Feel free to reach out — I'd love to hear about your project.
          </span>
        </p>

        {/* Contact Form */}
        <form className="mt-12 space-y-6 text-left">
          
          <div>
            <label className="block text-sm text-[#5603AD] mb-2 font-poppins font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-[#C2F8CB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8367C7] focus:border-[#8367C7] transition-all duration-300 font-dmsans bg-white hover:border-[#B3E9C7]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm text-[#5603AD] mb-2 font-poppins font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border-2 border-[#C2F8CB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8367C7] focus:border-[#8367C7] transition-all duration-300 font-dmsans bg-white hover:border-[#B3E9C7]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#5603AD] mb-2 font-poppins font-medium">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border-2 border-[#C2F8CB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8367C7] focus:border-[#8367C7] transition-all duration-300 font-dmsans bg-white hover:border-[#B3E9C7] resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#8367C7] to-[#5603AD] text-white rounded-full hover:shadow-lg hover:shadow-[#8367C7]/40 transition-all duration-300 hover:scale-[1.02] font-poppins font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Social Links or Additional Contact Info */}
        <div className="mt-12 pt-8 border-t border-[#C2F8CB]">
          <p className="text-neutral-600 font-inter text-sm mb-4">
            Or reach out directly:
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            
              <a href="mailto:contact@deimint.com"
              className="text-[#5603AD] hover:text-[#8367C7] transition-colors font-dmsans flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@deimint.com
            </a>
            
              <a href="#"
              className="text-[#5603AD] hover:text-[#8367C7] transition-colors font-dmsans flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              Facebook
            </a>
            
              <a href="#"
              className="text-[#5603AD] hover:text-[#8367C7] transition-colors font-dmsans flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;