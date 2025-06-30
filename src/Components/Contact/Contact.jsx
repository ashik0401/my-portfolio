import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contactInfo = [
    {
      title: "Email",
      icon: <FaEnvelope className="text-orange-400 text-3xl mb-2" />,
      content: "ashik04am@gmail.com",
    },
    {
      title: "Phone",
      icon: <FaPhoneAlt className="text-orange-400 text-3xl mb-2" />,
      content: "+8801302264907",
    },
    {
      title: "WhatsApp",
      icon: <FaWhatsapp className="text-orange-400 text-3xl mb-2" />,
      content: (
        <a
          href="https://wa.me/8801302264907"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-400"
        >
          +8801302264907
        </a>
      ),
    },
    {
      title: "Location",
      icon: <FaMapMarkerAlt className="text-orange-400 text-3xl mb-2" />,
      content: "Bangladesh",
    },
  ];

  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 text-center mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                className=" p-6 rounded-xl border border-white/20 shadow-lg text-white"
              >
                {info.icon}
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <p className="text-gray-300">{info.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="p-8 rounded-xl space-y-5 border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white/5 text-white border border-white/30 focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md bg-white/5 text-white border border-white/30 focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full md:h-96 px-4 py-2 rounded-md bg-white/5 text-white border border-white/30 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 transition rounded-md text-white font-semibold"
            >
              Send Message
            </button>
            {done && (
              <p className="text-green-400 mt-2 text-center">
                Message sent successfully!
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
