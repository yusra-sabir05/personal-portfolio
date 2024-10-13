import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({
  activeButton,
  hiddenButton,
  setActiveButton,
}: SwitchProps) {
  const [isHovered, setIsHovered] = useState(false);
  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hidden: { scale: 0.5, opacity: 0, y: 50 },
    hover: { scale: 1.1 }, // Reduced scaling to 1.1
  };

  return (
    <div>
      <AnimatePresence>
        {isHovered && (
          <motion.button
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="languageSwitcher"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem]"
          >
            <p className="text-sm font-semibold">{hiddenButton}</p>
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        className="w-[3rem] h-[3rem] drop-shadow-md" // Medium shadow
        variants={switchVariants}
        initial="visible"
        whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} // Lighter shadow on hover
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        <p className="font-semibold">{activeButton}</p>
      </motion.button>
    </div>
  );
}
