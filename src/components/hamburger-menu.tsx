"use client";
import React, { useState } from "react";
import { Link } from "@/lib/types";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/containers/active-section";
// animation
import { AnimatePresence, motion } from "framer-motion";


type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveSection,setTimeOfLastClick} = useActiveSectionContext()
  const menuTrigger ={
    visible:{scale:1,opacity:0.7 , y:0,},
    tap:{scale:0.85 },
    hover:{scale:1.2},

  }

   
  return (
    <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2">
      {/* Hamburger Icon Button */}
      <motion.button
      variants={menuTrigger}
      initial="visible"
      whileTap="tap"
      whileHover="hover"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-950 drop-shadow-lg border border-slate-900 dark:border-white border-opacity-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </motion.button>

      {/* AnimatePresence for the menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full flex flex-col items-end justify-start pr-4" // Positioned on the right side
          >
            {/* Map through links */}
            {links.map((link, index) => (
              <motion.div key={index} className="py-1">
                <NextLink
                href={link.hash}
                onClick={() =>{
                    setActiveSection(link.hash)
                    setTimeOfLastClick(Date.now())
                }}
                >
                  <span className="text-base text-gray-900 dark:text-white hover:underline">
                    {link.nameEng}
                  </span>
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
