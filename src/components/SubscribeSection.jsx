import React, { useState } from "react";
import bg from "../assets/bg-cube.webp"; // Import the background image
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    project: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255, 234, 0, 0.6) 0%, rgba(212, 181, 8) 50%, rgba(255, 223, 0, 0.6) 100%), url(${bg})`,
        // Using yellow shades for the gradient
      }}
    >
      <div className="grid lg:grid-cols-2 gap-5 w-full container mx-auto px-6 py-24 relative z-10 text-white">
        {/* Section one */}
        <div className=" mb-5  flex flex-col gap-5">
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Connect with us effortlessly Your feedback and inquiries are our
              inspiration
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full p-4 bg-yellow-500 rounded-lg border border-yellow-600">
            <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border border-yellow-600 bg-yellow-600">
              <FiPhoneCall className="text-xl text-white" />
            </div>
            <div className="grid lg:grid-cols-3 text-lg items-center justify-center gap-5  text-white ">
              <div>
              <p>(+91) 911 145 3332</p>
              <p>(+91) 911 145 4949</p>
              </div>
              <div>
              <p>(+1) 204 818 3312</p>
              <p>(+44) 736 557 7196</p>
              </div>
              <div>
              <p>(+971) 522 627 630</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-col md:flex-row w-full p-4 bg-yellow-500 rounded-lg border border-yellow-600">
            <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border border-yellow-600 bg-yellow-600">
              <MdOutlineMail className="text-xl text-white" />
            </div>
            <p className="text-xl text-center md:text-left text-white">
              hr@digiflex.ai <br />
              info@digiflex.ai
            </p>
          </div>
          <div className="flex items-center gap-3 flex-col md:flex-row w-full p-4 bg-yellow-500 rounded-lg border border-yellow-600">
            <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border border-yellow-600 bg-yellow-600">
              <MdLocationPin className="text-xl text-white" />
            </div>
            <p className="text-xl text-center md:text-left text-white">
              1206, Skye Earth Corporate Park, Indore MP (India), 452010
            </p>
          </div>
        </div>

        {/* Section two */}
        <div className="">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full p-6 rounded-lg shadow-lg space-y-6 h-full"
          >
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <textarea
              name="project"
              placeholder="About Project"
              value={formData.project}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
