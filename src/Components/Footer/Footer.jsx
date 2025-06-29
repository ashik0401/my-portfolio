import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-white rounded p-10 pb-30">
            <nav className="grid grid-flow-col gap-2">
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
            </nav>
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by ACME
                    Industries Ltd
                </p>
            </aside>

            <nav>
                <div className="grid grid-flow-col gap-6">
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1DA1F2] text-2xl hover:scale-110 transition"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077B5] text-2xl hover:scale-110 transition"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://facebook.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877F2] text-2xl hover:scale-110 transition"
                    >
                        <FaFacebookF />
                    </a>
                </div>
            </nav>


        </footer>
    );
};

export default Footer;
