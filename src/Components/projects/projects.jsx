import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiReactrouter } from "react-icons/si";

const iconMap = {
  React: <FaReact className="text-blue-500" title="React" />,
  "React Router": <SiReactrouter className="text-blue-600" title="React Router" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />,
  "Daisy UI": <span className="text-pink-500 font-bold" title="Daisy UI">🌼</span>,
  "Express.js": <SiExpress className="" title="Express.js" />,
  MongoDB: <SiMongodb className="text-green-600" title="MongoDB" />,
  Firebase: <SiFirebase className="text-yellow-400" title="Firebase" />,
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalProject, setModalProject] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const openDetails = (project) => {
    setModalProject(project);
    setShowFullDesc(false);
  };

  const closeDetails = () => {
    setModalProject(null);
    setShowFullDesc(false);
  };

  return (
    <>
      <section id="Projects" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-12">
            My Latest project
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => {
              const isEven = index % 2 === 1;
              const isFirstOrLast = index === 0 || index === projects.length - 1;

              return (
                <motion.div
                  key={project.id}
                  className="flex flex-col md:flex-row items-center gap-8 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5"
                  style={{ minHeight: 320 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                >
                  {(isFirstOrLast && (
                    <>
                      <div className="w-full md:w-1/2 order-1">
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={10}
                          slidesPerView={1}
                          autoplay={{ delay: 2000, disableOnInteraction: false }}
                          loop={true}
                          className="h-[280px] w-full rounded-2xl overflow-hidden"
                        >
                          {project.images?.map((image, i) => (
                            <SwiperSlide key={i}>
                              <img
                                src={image}
                                alt={`${project.title} slide ${i + 1}`}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div className="w-full md:w-1/2 order-2 space-y-4">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <div className="flex flex-wrap gap-3 text-2xl text-white">
                          {project.techStack?.map((tech) => (
                            <div
                              key={tech}
                              className="p-1 rounded-md hover:text-orange-500 transition cursor-default"
                              title={tech}
                            >
                              {iconMap[tech] || null}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-3 flex-wrap ">
                          <button
                            onClick={() => openDetails(project)}
                            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-medium cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => window.open(project.liveLink, "_blank")}
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium cursor-pointer"
                          >
                            Live Link
                          </button>
                          <button
                            onClick={() => window.open(project.githubLink, "_blank")}
                            className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white font-medium cursor-pointer"
                          >
                            GitHub
                          </button>
                        </div>
                      </div>
                    </>
                  )) ||
                    (isEven && (
                      <>
                        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-4">
                          <h3 className="text-2xl font-semibold">{project.title}</h3>
                          <div className="flex flex-wrap gap-3 text-2xl text-white">
                            {project.techStack?.map((tech) => (
                              <div
                                key={tech}
                                className="p-1 rounded-md hover:text-orange-500 transition cursor-default"
                                title={tech}
                              >
                                {iconMap[tech] || null}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-3 mt-3 flex-wrap">
                            <button
                              onClick={() => openDetails(project)}
                              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => window.open(project.liveLink, "_blank")}
                              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              Live Link
                            </button>
                            <button
                              onClick={() => window.open(project.githubLink, "_blank")}
                              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              GitHub
                            </button>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                          <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="h-[280px] w-full rounded-2xl overflow-hidden"
                          >
                            {project.images?.map((image, i) => (
                              <SwiperSlide key={i}>
                                <img
                                  src={image}
                                  alt={`${project.title} slide ${i + 1}`}
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </>
                    )) ||
                    (
                      <>
                        <div className="w-full md:w-1/2 order-1">
                          <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="h-[280px] w-full rounded-2xl overflow-hidden"
                          >
                            {project.images?.map((image, i) => (
                              <SwiperSlide key={i}>
                                <img
                                  src={image}
                                  alt={`${project.title} slide ${i + 1}`}
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                        <div className="w-full md:w-1/2 order-2 space-y-4">
                          <h3 className="text-2xl font-semibold">{project.title}</h3>
                          <div className="flex flex-wrap gap-3 text-2xl text-white">
                            {project.techStack?.map((tech) => (
                              <div
                                key={tech}
                                className="p-1 rounded-md hover:text-orange-500 transition cursor-default"
                                title={tech}
                              >
                                {iconMap[tech] || null}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-3 mt-3 flex-wrap">
                            <button
                              onClick={() => openDetails(project)}
                              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => window.open(project.liveLink, "_blank")}
                              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              Live Link
                            </button>
                            <button
                              onClick={() => window.open(project.githubLink, "_blank")}
                              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white font-medium cursor-pointer"
                            >
                              GitHub
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {modalProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-70 flex justify-center items-center z-50 px-4"
          onClick={closeDetails}
        >
          <motion.div
            className="bg-white text-gray-900 rounded-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={closeDetails}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 font-bold text-3xl leading-none"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{modalProject.title}</h2>
            <p
              className={`mb-4 whitespace-pre-line ${
                showFullDesc ? "" : "line-clamp-3"
              }`}
            >
              {modalProject.shortDescription}
            </p>
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-orange-500 font-bold cursor-pointer hover:underline mb-4 "
            >
              {showFullDesc ? "See less" : "See more"}
            </button>
            <h3 className="text-xl font-semibold mb-2">Challenges</h3>
            <p className="mb-4 whitespace-pre-line">{modalProject.challenges}</p>
            <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
            <p className="whitespace-pre-line">{modalProject.futurePlans}</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Projects;
