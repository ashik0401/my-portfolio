import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFutbol,
  FaGithub,
  FaUserAlt,
  FaLaptopCode,
  FaServer,
  FaGamepad,
  FaHandshake,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiFirebase,
  SiReactquery,
} from "react-icons/si";

const cardVariants = [
  { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  { initial: { x: 60, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  { initial: { y: -60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  { initial: { scale: 0.7, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
];

const icons = [
  <FaUserAlt />,
  <FaLaptopCode />,
  <FaServer />,
  <FaGamepad />,
  <FaHandshake />,
];

const paragraphs = [
  <>
    Hey there! I'm{" "}
    <span className="text-white font-semibold">Md. Ashik Mahmud</span>, a
    passionate Full Stack Web Developer with a strong focus on modern frontend
    technologies. My journey into web development started with a deep curiosity
    for the web and has grown into a mission to build clean, efficient, and
    user-centered applications.
  </>,
  <>
    On the frontend, I specialize in{" "}
    <span className="text-orange-500">React</span>,{" "}
    <span className="text-orange-500">Vite</span>,{" "}
    <span className="text-orange-500">Tailwind CSS</span>, and{" "}
    <span className="text-orange-500">DaisyUI</span>. I also leverage tools
    like <span className="text-orange-500">React Router</span> and{" "}
    <span className="text-orange-500">React Query</span> to create fast,
    scalable, and seamless interfaces.
  </>,
  <>
    For backend development, I work with{" "}
    <span className="text-orange-500">Node.js</span> and{" "}
    <span className="text-orange-500">Express.js</span> to build secure and
    performant APIs, while using{" "}
    <span className="text-orange-500">MongoDB</span> to handle data with
    flexibility and efficiency. I also use{" "}
    <span className="text-orange-500">Firebase</span> for authentication and
    real-time features when needed.
  </>,
  <>
    Beyond coding, I’m a passionate{" "}
    <span className="text-white font-medium">esports enthusiast 🎮</span> who
    loves competitive gaming, football ⚽, and exploring the beauty of nature
    🌿. Traveling to new places ✈️ keeps me energized and creatively inspired.
  </>,
  <>
    I’m always looking to collaborate on exciting projects and bring ideas to
    life through elegant and intuitive web experiences.
  </>,
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex overflow-hidden items-center justify-center text-white px-0 mx-0 md:px-16 py-16"
    >
      <motion.div
        className="w-full md:max-w-5xl text-center space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}

      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
          About Me
        </h2>

        {paragraphs.map((para, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-xl text-base sm:text-lg text-gray-300 leading-relaxed md:flex items-start gap-4"
            initial={cardVariants[index % cardVariants.length].initial}
            whileInView={cardVariants[index % cardVariants.length].animate}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ infinity: true, amount: 0.4 }}
          >
            <div className="text-orange-500 text-2xl mt-1">{icons[index]}</div>
            <div className="text-left">{para}</div>
          </motion.div>
        ))}

        <div className="flex flex-wrap justify-center gap-4 text-orange-500 text-2xl pt-4">
          <FaReact className="hover:text-white transition" />
          <SiVite className="hover:text-white transition" />
          <SiTailwindcss className="hover:text-white transition" />
          <SiFirebase className="hover:text-white transition" />
          <SiReactquery className="hover:text-white transition" />
          <FaNodeJs className="hover:text-white transition" />
          <SiMongodb className="hover:text-white transition" />
          <FaGithub className="hover:text-white transition" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
