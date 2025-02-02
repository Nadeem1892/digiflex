import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerCard = ({ imgSrc, name, link }) => {
  return (
    <div className="bg-white lg:w-60 w-80 m-auto rounded-lg  overflow-hidden p-4 transform transition-all hover:scale-105 hover:shadow-xl">
      <div className=" w-full h-24">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
     
    </div>
  );
};

const OurPartners = () => {
  const partners = [
    {  imgSrc: "https://digiflex.ai/assets/img/partner/partner-5.png", link: "#" },
    { imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/1st.png", link: "#" },
    {  imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/partner2.png", link: "#" },
    {  imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/patner3.png", link: "#" },
    { imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/patner4.png", link: "#" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <div className="py-20 bg-[#121212] text-center overflow-hidden">
    <h2 className="text-4xl font-semibold mb-6 text-yellow-500">Our Partners</h2>
    <p className="text-xl mb-10 text-gray-600">
      We are proud to collaborate with these amazing partners.
    </p>
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {partners.map((partner) => (
          <PartnerCard key={partner.imgSrc} imgSrc={partner.imgSrc} />
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default OurPartners;
