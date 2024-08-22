import React, { useEffect, useState } from 'react'

import logo from '../../assets/img/logo.svg';
import { Nav } from './nav';
import { Social } from './social';
import { NavMobile } from './navMobile/navMobile';

export const Header = () => {

    const [bg,setBg] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        }
        )
    })
  return (
    <header className={`${bg ? "bg-tertiary h-20" : "h-24"} flex items-center fixed top-0 w-full
     text-white z-10 transition-all duration-300`}>
        <div className="container mx-auto h-full flex
        items-center justify-between">
            <a href="#">
                <img src={logo} alt="Logo" />
            </a>
            <div className="hidden lg:block">
                <Nav/>
            </div>
            <div className="hidden lg:block">
                <Social/>
            </div>
            <div className="hidden lg:block">
                <NavMobile/>
            </div>
        </div>
    </header>
  )
}

