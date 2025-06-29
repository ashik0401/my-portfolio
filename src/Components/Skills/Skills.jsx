import React from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNode, FaJsSquare
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiExpress, SiDaisyui, SiMongodb, SiReactrouter, SiVite
} from "react-icons/si";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import lottie from "../../assets/lottie.json";

const skills = [
  { icon: FaHtml5, title: "HTML" },
  { icon: FaCss3Alt, title: "CSS" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: SiDaisyui, title: "DaisyUI" },
  { icon: FaReact, title: "React" },
  { icon: SiReactrouter, title: "Router" },
  { icon: FaJsSquare, title: "JavaScript" },
  { icon: SiVite, title: "Vite" },
  { icon: FaNode, title: "Node.js" },
  { icon: SiExpress, title: "Express.js" },
  { icon: SiMongodb, title: "MongoDB" },
  { icon: SiFirebase, title: "Firebase" },
];

const loopVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Skills = () => {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-orange-400">
          My Skills
        </h2>

        <div className="flex justify-center mb-10">
          <Player
            autoplay
            loop
            src={lottie}
            style={{ height: "300px", width: "300px" }}
          />
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            variants={loopVariants}
            animate="animate"
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[120px] p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
              >
                <skill.icon className="text-5xl text-orange-400 mb-2" />
                <p className="text-sm text-white text-center">{skill.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
