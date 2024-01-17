import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import banner from "../assets/banner3.jpg";
import { useEffect } from "react";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Text Section */}
      <motion.div
        className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-center order-2 sm:order-1"
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-indigo-900 mb-2 sm:mb-4">
          Unleashing Digital Innovation
        </h1>
        <p className="text-base sm:text-xl text-gray-800 mb-4">
          Hi, I'm Dharma Seervi, a passionate web developer dedicated to
          crafting digital experiences that resonate. I thrive on turning ideas
          into captivating online realities. From building responsive websites
          to optimizing user interfaces, I love the challenge of creating
          seamless digital solutions.
        </p>
        <p className="text-sm sm:text-lg text-gray-700">
          Join me on this exciting journey where creativity meets technology,
          and let's shape the digital future together!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full sm:w-1/2 h-60 sm:h-full p-2 flex justify-center items-center order-1 sm:order-2"
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <img
          className="h-full w-full object-cover mix-blend-screen"
          src={banner}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
