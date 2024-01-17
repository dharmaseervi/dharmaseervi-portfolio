import { motion, useAnimation } from "framer-motion";
import { GitHub, Linkedin, Twitter } from "react-feather"; // Feather Icons
import profileImage from "../assets/react.jpg"; // Replace with your image path
import ResumeButton from "./ResumeButton";
import { useEffect } from "react";

const HeroSection = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  useEffect(() => {
    controls.start("visible");
    document.body.style.overflowX = 'hidden';
  }, [controls]);

  return (
    <section className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen  flex items-center justify-center text-white">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-center"
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <h1 className="text-4xl font-bold mb-4">Dharma Seervi</h1>
        <p className="text-lg mb-8">
          Software Engineer | Innovative Problem Solver
        </p>
        <motion.div
          className="flex justify-center mb-8 space-x-4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://github.com/dharmaseervi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={32} className="text-white hover:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/dharmaseervi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} className="text-white hover:text-gray-300" />
          </a>
          <a
            href="https://twitter.com/SeerviDharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={32} className="text-white hover:text-gray-300" />
          </a>
        </motion.div>
        <ResumeButton />
      </motion.div>
    </section>
  );
};

export default HeroSection;
