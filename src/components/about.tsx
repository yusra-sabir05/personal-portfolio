"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useSectionInView } from "@/lib/userInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
    >
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>
           {"About Me"}
            </SectionHeading>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6 text-lg">Our Missions</h3>
                </Fade>
                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Our mission is to provide the best possible service to our customers. We strive to be the best in the industry and to make a positive impact on our community.
                  </p>
                </Fade>
                <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6 text-lg">Our Vision</h3>
                </Fade>
                <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Our vision is to create custom websites that not only reflect your brand but also help you achieve your business objectives. From responsive design to intuitive navigation, we focus on every single detail.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
              <Image
                src="/about.png"
                alt="About me"
                quality="100"
                priority={true}
                width={300} // Use a smaller width for mobile
                height={300} // Use a smaller height for mobile
                className="rounded-full object-cover max-w-full h-auto"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
