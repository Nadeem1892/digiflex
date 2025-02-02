import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecognitionCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-gray-200 rounded-lg flex flex-col gap-5 p-6 text-center transform transition-all  h-[450px] w-76 md:h-[420px] md:w-80">
      <div className="relative bg-white rounded-t-xl w-full h-20 flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-40 p-5  object-contain"
        />
      </div>
      <div className="flex flex-col gap-5">
      <span className="text-gray-600 text-sm mt-2 font-serif">{description}</span>
      <div className="flex flex-col gap-1">
      <span>⭐⭐⭐⭐⭐</span>
      <span>4.8(100 Reviews)</span>
      </div>
     
      </div>
    </div>
  );
};

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
    >
      <FaArrowRight size={20} />
    </button>
  );
};

const OurRecognition = () => {
  const recognitions = [
    {
      imgSrc:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/App-Futura.png",
      title: "Best Startup Award",
      description: `
                      "Our motorcycle brand finds that Digiflex
                       produced very high caliber deliverables and a quality of work that exceeded the
                         our clients initial expectations. The software development team maintained an
                        impressively rapid pace to deliver results quickly. Every resource who
                        contributed was remarkably skilled and well-informed."
                      `,
    },                                 
                                        
    {
      imgSrc:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/clutch.png",
      title: "Top 100 Companies",
      description: ` "Our motorcycle brand finds that Digiflex
                      produced very high caliber deliverables and a quality of work that exceeded the
                      our clients initial expectations. The software development team maintained an
                      impressively rapid pace to deliver results quickly. Every resource who
                      contributed was remarkably skilled and well-informed."`,
    },                                
                                        
    {
      imgSrc:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/goodfrims.png",
      title: "Customer Choice Award",
      description:`"Digiflex, developed a mobile app for iOS and Android platforms. The app was
                     for a fishing startup and it had atmospheric and environmental information for
                     the users. This mobile application is also able to pinpoint the exact location
                     of the species in the water and of the fisherman thanks to the geolocation
                     implemented. It also features an in-app camera option to take pictures of the
                      fishes." `,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-24 bg-gray-100 text-center overflow-hidden">
      <h2 className="text-4xl font-semibold mb-3 text-yellow-500">
        Our Recognition
      </h2>
      <p className="text-xl mb-3 text-gray-600">
        Celebrating milestones of excellence and achievement.
      </p>

      {/* Recognition Slider Section */}
      <div className="max-w-5xl mx-auto ">
        <Slider {...settings}>
          {recognitions.map((item, index) => (
            <div key={index} className="lg:px-4 px-12">
              <RecognitionCard
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurRecognition;
