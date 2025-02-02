import React from "react";
import { motion } from "framer-motion";

// Component for displaying individual statistics
const StatsCard = ({ value, label }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-semibold text-gray-500">{value}</h3>
      <p className="text-xl text-gray-400">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div
      className="py-20 text-white text-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/abstract-technology-communication-concept-background_29865-2320.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold mb-6 text-yellow-500">About Us</h2>
      <p className="text-xl mb-10 text-gray-400">
        As innovators, we are transforming the digital environment. At
        Digiflex AI, we use our wealth of knowledge and pool of skilled
        employees to provide organizations throughout the world with excellent
        IT services. We have been successful in maintaining the faith that our
        clients have set up in us throughout the years and developing enduring
        relationships.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <StatsCard value="150+" label="Project Completed" />
        <StatsCard value="250+" label="Satisfied Clients" />
        <StatsCard value="50+" label="Expert Teams" />
        <StatsCard value="28+" label="Win Awards" />
      </div>
    </motion.div>
  );
};

export default About;
