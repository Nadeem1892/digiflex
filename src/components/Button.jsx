import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-6 py-2 bg-yellow-600 text-white rounded-full shadow-md hover:bg-yellow-700"
    >
      {text}
    </motion.button>
  );
};

export default Button;
