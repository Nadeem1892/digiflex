import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

const ClientCard = ({ imgSrc, name, description, isActive, position }) => {
  return (
    <div
      className={`relative bg-white shadow-lg p-6  transform transition-all duration-500 ${
        isActive ? "scale-105 shadow-2xl opacity-100" : "scale-90 opacity-50 blur-sm"
      } `}
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-yellow-600">{name}</h3>
        <h4 className="text-lg font-semibold mt-1 text-gray-600">{position}</h4>
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
      </div>

      <p className="text-gray-600 text-sm mt-4 px-4">{description}</p>

      <div className="flex justify-between items-center gap-6 mt-6">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <FaQuoteRight className="w-14 h-14 text-yellow-600" />
      </div>
    </div>
  );
};

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
  >
    <FaArrowLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
  >
    <FaArrowRight size={20} />
  </button>
);

const ClientFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/reivewer.jpg",
      name: "Davis Miller",
      position: "Executive Chairman",
      description: `Quest Digiflex created a powerful corporate portal that makes communication
        and information exchange within our company easier. Our production has increased and
        networking has become easier thanks to the site. Quest Digiflex provided an
        easy-to-use and effective solution that was customized to meet our demands, and
        their execution was excellent.`,
    },
    {
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/reivewer-1.jpg",
      name: "Morris Murphy",
      position: "Director",
      description: `Integrating Quest Digiflex with Dynamics 365 Business Central was
        revolutionary. They significantly increased efficiency by streamlining our
        operational and financial procedures. The seamless transfer was made possible by
        Quest Digiflex's comprehension of our demands and meticulous attention to detail.`,
    },
    {
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/reivewer.jpg",
      name: "Davis Miller",
      position: "Executive Chairman",
      description: `Quest Digiflex created a powerful corporate portal that makes communication
        and information exchange within our company easier. Our production has increased and
        networking has become easier thanks to the site. Quest Digiflex provided an
        easy-to-use and effective solution that was customized to meet our demands, and
        their execution was excellent.`,
    },
    {
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/reivewer-1.jpg",
      name: "Morris Murphy",
      position: "Director",
      description: `Integrating Quest Digiflex with Dynamics 365 Business Central was
        revolutionary. They significantly increased efficiency by streamlining our
        operational and financial procedures. The seamless transfer was made possible by
        Quest Digiflex's comprehension of our demands and meticulous attention to detail.`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    prevArrow: window.innerWidth >= 768 ? <CustomPrevArrow /> : null,
    nextArrow: window.innerWidth >= 768 ? <CustomNextArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className="py-24 bg-cover bg-center text-center relative  md:min-h-[400px] lg:min-h-[600px]"
      style={{
        backgroundImage:
          "url('https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/newdigi/test.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 px-4 ">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-yellow-500">
          Client Say About Us
        </h2>
        <p className="text-lg md:text-xl mb-4 text-gray-200">
          That is how we are delivering the promises to our clients.
        </p>

        {/* Client Feedback Slider */}
        <div className="max-w-6xl mx-auto relative">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-2 md:px-1">
                <ClientCard
                  imgSrc={client.imgSrc}
                  name={client.name}
                  description={client.description}
                  position={client.position}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
