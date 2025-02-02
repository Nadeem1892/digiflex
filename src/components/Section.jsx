import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ Icon, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="p-10 max-w-4xl mx-auto text-center bg-[#121212] shadow-lg rounded-lg  "
    >
      {/* Icon */}
      <div className="flex justify-center gap-5 mb-4 ">
        {Icon && <Icon className="w-16 h-16 text-yellow-600" />}  {/* Rendering the passed icon */}
      </div>
      <h2 className="text-3xl font-semibold text-yellow-600 mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Section;
