"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// animation
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/userInView'
export default function Intro (){
    const { ref } = useSectionInView ("#home",0.5);
    return (
        <section 
        ref={ref}
        id='home'
        className='mb-28 max-w-[75rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                  
                    
                    >
                        <Image 
                        src="/girl.png"
                        width="220"
                        height="220"
                        alt='portrait'
                        quality="100"
                        priority={true}
                        className='rounded-full shadow-xl object-cover'
                        />
                    </motion.div>
                    <motion.span
                   className='text-3xl absolute bottom-5 right-1'
                   initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

            </Fade>

            <h1 className='mb-10 mt-4 text-2xl sm:text-3xl'>
                <span className='font-bold !leading-[1.5]'>
                    Grow your bussiness with a new website
                </span>{" "}
                <p className='text-[14px]'>
                    Frontend is a full-service creative studio creating beautifull digital experiences and products

                </p>
            </h1>

            <motion.div className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.1}}
            >

                <Link href="#"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition
                "
                >Connect <Mail color={'#9ca3af'}/>
                </Link>
                <a  className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full  focus:scale-[1.15]
                hover:scale-[1.15] dark:text-white/60 dark:bg-white/10 active:scale-105 transition cursor-pointer border-black"
                href="#"
                target='_blank'
                >
                    <BsLinkedin/>
                    
                </a>
                <a className="bg-gray-900 text-white p-4 flex text-[1.35rem] items-center gap-2 rounded-full focus:scale-[1.15]
                hover:scale-[1.15] dark:text-white/60 dark:bg-white/10 active:scale-105 transition cursor-pointer border-black"
                href="#"
                target='_blank'>
                    <BsGithub/>
                </a>
            </motion.div>
        </section>

    )
}

