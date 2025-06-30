import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const link = (
        <>
            <li>
                <Link
                    to="about"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    activeClass="underline-active"
                    className="group relative md:px-4 py-1 cursor-pointer text-white font-bold"
                >
                    About Me
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li>
                <Link
                    to="skills"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    activeClass="underline-active"
                    className="group relative md:px-4 py-1 cursor-pointer text-white font-bold"
                >
                    Skills
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li>
                <Link
                    to="Projects"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    activeClass="underline-active"
                    className="group relative md:px-4 py-1 cursor-pointer text-white font-bold"
                >
                    Projects
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    spy={true}
                    activeClass="underline-active"
                    className="group relative md:px-4 py-1 cursor-pointer text-white font-bold"
                >
                    contact
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-100  backdrop-blur shadow-md">
            <div className="navbar text-white md:w-10/12 mx-auto">
                <div
                    onClick={() => scroll.scrollToTop()}
                    className="navbar-start">

                    <a

                        className="text-xl text-orange-300 cursor-pointer"
                    >
                        <img
                            className='max-w-15 max-h-15'
                            src={logo} alt="" />

                    </a>
                    <h2 className='text-xl font-semibold text-orange-400 btn bg-transparent border-none shadow-none px-0'>Ashik Mahmud</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xs">{link}</ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <div className='-ml-20'>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#2C2F48] rounded-box z-1 mt-3 w-30 p-2 shadow">
                                {link}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
