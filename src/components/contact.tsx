"use client"
import SectionHeading from "./section-heading";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/userInView";
import SubmitBtn from "./submit-btn";
import {Fade} from "react-awesome-reveal"


export default function Contact(){
    const { ref } = useSectionInView("#contact") 
    return(
        <motion.section
        id="contact"
        ref={ref}
        >
            <Fade 
            triggerOnce={true}
            direction="up"
            cascade damping={1e-1}
            delay={400}>

<SectionHeading>
                {"Contact Me"}
            </SectionHeading>

            </Fade>
            <Fade 
            triggerOnce={true}
            direction="up"
            cascade damping={1e-1}
            delay={600}>
                <p className="text-gray-700 -mt-6 dark:text-white/80">
                {"Feel free to contact me directly through this form"}
            </p>
            </Fade>
            <Fade 
            triggerOnce={true}
            direction="up"
            cascade damping={1e-1}
            delay={800}>
                 <form className="mt-10 flex flex-col dark:text-black">
                <input type="email" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:"
                placeholder={"Your Email"}

                name="senderEmail"
                required
                maxLength={5000}
                />
               <SubmitBtn text={"Submit"}/>
            </form>
            
            </Fade>

            
           
        </motion.section>
    )
}