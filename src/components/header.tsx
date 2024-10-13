"use client"
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext} from "@/containers/active-section";
import React from "react";
import { Link } from "@/lib/types";

// animation 
import { motion } from "framer-motion";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); 

  return (
    <header className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-4">
      < motion.div
      initial={{ opacity: 0,y:-100 }}
      animate={{y:0, opacity:1}}
       className="flex p-1 rounded-none border border-white border-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:ng-gray-950 dark:border-black/40 dark:bg-opacity-45 ">
        <ul className="flex flex-wrap items-center gap-y-1 justify-center text-[0.9rem] font-medium text-gray-500 ">
          {links.map((link) => (
            <motion.li
            initial={{ opacity: 0,y:-100 }}
            animate={{y:0, opacity:1}}
             className="flex items-center justify-center relative"
            key={link.hash}
            >
              <NextLink className={clsx(
                "flex items-center justify-center w-full px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-3300",
                {
                    "text-gray-950 dark:text-gray-200": activeSection === link.hash,

                }
              )}
               href={link.hash}
               onClick={() => {
                setActiveSection(link.hash);
                setTimeOfLastClick(Date.now());
               }}
              >
                {link.nameEng}
                {link.hash === activeSection && (
                    <motion.span 
                    transition={{
                        type:"spring",
                        stiffness:300,
                        damping:30
                    }}
                    layoutId="activeSection"
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    >
                        
                    </motion.span>
                )}
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </ motion.div>
    </header>
  );
}

