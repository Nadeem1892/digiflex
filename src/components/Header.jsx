import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#121212] shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-3">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-yellow-600 flex items-center">
            <img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/logo.png" alt="Logo" className="lg:h-8 h-8 mr-2" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <span className="font-semibold text-yellow-500">🌍 Our Global Presence:</span>
            <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/United-Arab-Emirates.png" alt="uae" />UAE</span>
            <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/USA.png" alt="usa" />USA</span>
            <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/india.png" alt="ind" />INDIA</span>
          </nav>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-500 text-gray-400">Company</a>
            <a href="/" className="hover:text-yellow-500 text-gray-400">Services</a>
            <a href="/" className="hover:text-yellow-500 text-gray-400">About Us</a>
            <a href="/" className="hover:text-yellow-500 text-gray-400">Projects</a>
            <a href="/" className="hover:text-yellow-500 text-gray-400">Contact Us</a>
          </nav>

          {/* Enquire Now Button (Desktop) */}
          <a
            href="/"
            className="hidden md:block px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
          >
            Enquire Now
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              <span className="text-yellow-500 font-semibold">🌍 Our Global Presence:</span>
              <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/United-Arab-Emirates.png" alt="uae" />UAE</span>
            <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/USA.png" alt="usa" />USA</span>
            <span className="hover:text-yellow-500 text-gray-400 flex items-center gap-1"><img src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/india.png" alt="ind" />INDIA</span>
              <hr className="w-32 border-gray-300" />
              <a href="/" className="hover:text-yellow-500 text-gray-400">Company</a>
              <a href="/" className="hover:text-yellow-500 text-gray-400">Services</a>
              <a href="/" className="hover:text-yellow-500 text-gray-400">About Us</a>
              <a href="/" className="hover:text-yellow-500 text-gray-400">Projects</a>
              <a href="/" className="hover:text-yellow-500 text-gray-400">Contact Us</a>
              <a href="/" className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                Enquire Now
              </a>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
