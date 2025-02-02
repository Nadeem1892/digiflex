import React from "react";
import { motion } from "framer-motion";

// Project Card Component
const ProjectCard = ({ title, imgSrc, link }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl h-full relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-64">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center">
        <div className="flex justify-between items-center w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-t-lg">
            <div className="text-left text-white">
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-right text-blue-600 font-semibold"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Tripocio Carnival",
      description: "This is the description for project 1. A brief overview of what it is.",
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/tri1.png",
      link: "#",
    },
    {
      title: "Tradeworld247",
      description: "This is the description for project 2. A brief overview of what it is.",
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/TREADWORLD2.png",
      link: "#",
    },
    {
      title: "Arihant Capital",
      description: "This is the description for project 3. A brief overview of what it is.",
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/Arihantcapital.png",
      link: "#",
    },
    {
      title: "Reerate App",
      description: "This is the description for project 4. A brief overview of what it is.",
      imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/reetae1.png",
      link: "#",
    },
    {
        title: "Healthveda Organic",
        description: "This is the description for project 4. A brief overview of what it is.",
        imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/healthveda.png",
        link: "#",
      },
      {
        title: "Meta Sky Dubai",
        description: "This is the description for project 4. A brief overview of what it is.",
        imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex-main1/digiflrx-main1/metaworld.png",
        link: "#",
      },
  ];

  return (
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-6 text-yellow-500">Our Projects</h2>
      <p className="text-xl mb-10 text-gray-600">
       From sleek, simple web devepoment to prestigious iOS and Android app development, and Digital Marketing services we create solutions that flourish at the nexus of user demands and company objectives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-7xl px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
