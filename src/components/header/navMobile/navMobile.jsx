import React, { useState } from 'react'

import { navigation } from '../../../data'

import { XMarkIcon } from '@heroicons/react/16/solid';
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';

import { motion } from 'framer-motion';


export const NavMobile = () => {

    const [isOpen,setIsOpen] = useState(false);

    const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition:{
                type: 'spring',
                stiffness:160,
                damping:60,
            },
        },
    };


    const ulVariants ={
        hidden: {
            opacity:0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };
    

  return (
    <nav className="relative">
        <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
            <Bars3BottomLeftIcon className=" w-8 h-8"/>
        </div>

        <motion.div variants={circleVariants} initial="hidden" 
        animate ={isOpen ? "visible" : "hidden" } 
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"> 

        </motion.div>

    </nav>
  )
}


