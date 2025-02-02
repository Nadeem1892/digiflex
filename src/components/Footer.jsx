import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* digiflex Logo */}
          <div>
            <img
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/logo.png"
              alt="digiflex Logo"
              className="w-48 mb-4"
            />
            <p>
              Get in touch with us for the latest information and oure
              innovation through social media handles given below
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-2xl">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Website Development",
                "Mobile App Development",
                "Shopify Development",
                "WordPress Development",
                "Digital Marketing Services",
              ].map((service, index) => (
                <li
                  key={index}
                   className="cursor-pointer px-2 py-1 rounded-md transition-all duration-300 hover:text-yellow-500  hover:pl-3"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4 text-2xl">Quick Links</h3>
            <ul className="space-y-2">
              {["Company", "About Us", "Project", "Contact Us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-2 py-1 rounded-md transition-all duration-300 hover:text-yellow-500  hover:pl-3"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex items-center flex-col">
            <h3 className="font-semibold mb-4 text-2xl">Follow Us On</h3>
            <ul className="flex gap-9">
              <li className="bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-[#121212] border">
                <FaLinkedin />
              </li>
              <li className="bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-[#121212] border">
                <IoLogoFacebook />
              </li>
              <li className="bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-[#121212] border">
                <FaInstagram />
              </li>
              <li className="bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-[#121212] border">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm flex justify-between bg-black p-4 rounded-lg opacity-50 items-center">
          <div className="">
            <p className="lg:text-lg">
              © 2024 Digiflex Technologies Pvt. Ltd. All Rights Reserved
            </p>
            {/* Add social media icons here */}
          </div>
          <div>
            <p className="lg:text-lg flex gap-5">
              <a
                href="/privacy-policy"
                className="text-white hover:text-yellow-500"
              >
                {" "}
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-white hover:text-yellow-500"
              >
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
