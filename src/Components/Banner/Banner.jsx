import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import bannerImage from '../../assets/banner.png';
import { FiFacebook } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="py-30 flex flex-col-reverse md:flex-row items-center justify-between text-white ">
            <motion.div
                className="md:w-1/2 space-y-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-orange-400">Hi, <br /></span>I'm <span className="font-semibold underline decoration-orange-400">Ashik Mahmud</span>
                </h1>
                <p className="text-lg md:text-xl">
                    A passionate <strong className="text-orange-500">Full Stack Web Developer</strong> who crafts responsive and dynamic web applications using React, Tailwind CSS, Node.js, and MongoDB.
                </p>
              <div className="flex gap-2">
                  <div>
                    <a
                        href="https://github.com/ashik0401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center border border-orange-500 rounded-full p-2 text-white hover:bg-orange-500 transition duration-300"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.facebook.com/share/19qNpotWrg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center border border-orange-500 rounded-full p-2 text-white hover:bg-orange-500 transition duration-300"
                    >
                        <FiFacebook size={40} />
                    </a>
                </div>
              </div>
                <motion.button
                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Resume
                </motion.button>
            </motion.div>

            <motion.div
                className="md:w-1/2 flex justify-center mb-10 md:mb-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className=" rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                    <img
                        src={bannerImage}
                        alt=""
                        className="object-contain  md:h-full h-96 w-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
