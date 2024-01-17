import React from "react";
import { motion } from "framer-motion";
import {
  RiComputerLine,
  RiCheckboxCircleFill,
  RiShoppingCartLine,
} from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiAxios } from "react-icons/si";
import {
  FaReact,
  FaFire,
  FaNode,
  FaGit,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaApple,
  FaCode,
  FaAtom,
  FaSass,
  FaDocker,
  FaArrowDown,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
const projects = [
  {
    title: "CareSync-Pro",
    link: "https://caresync-pro.onrender.com",
    description:
      "Led the development of a groundbreaking platform for startups in my final year. Strategized and implemented seamless connectivity between startups and investors, streamlining the funding process. Utilized React.JS for a dynamic front-end and Firebase for robust back-end functionality.",
    techStack: [
      "React",
      "MongoDb",
      "nodejs",
      "expressjs",
      "Bootstrap",
      "axios",
      "JWT",
      "express-session",
    ],
    category: "Web Development",
  },
  {
    title: "ARTUP PLATFORM",
    link: "https://github.com/dharmaseervi/artup",
    description:
      "Led the development of a groundbreaking platform for startups in my final year. Strategized and implemented seamless connectivity between startups and investors, streamlining the funding process. Utilized React.JS for a dynamic front-end and Firebase for robust back-end functionality.",
    techStack: ["React", "Firebase", "nodejs", "expressjs"],
    category: "Web Development",
  },
  {
    title: "WEATHER APP",
    link: "https://dharmaseervi.github.io/weatherApp/",
    description:
      "Spearheaded the creation of a dynamic website leveraging an API to fetch real-time weather data for searched locations. Innovatively incorporated location detection to provide instant weather updates for the user’s current location. Crafted with precision using ReactJS to ensure a seamless and user-friendly experience.",
    techStack: ["javascript", "html", "css", "API Integration"],
    category: "Web Development",
  },
  {
    title: "TODO APP",
    link: "https://github.com/dharmaseervi/toDoList",
    description:
      "Conceptualized and developed a feature-rich to-do app employing the full web stack. Utilized React.JS to create an intuitive front-end and implemented Express.JS with Mongoose for a robust server. Ensured seamless data storage and retrieval by integrating MongoDB into the architecture.",
    techStack: ["React", "Express", "MongoDB", "ejs", "nodejs", "bootstrap"],
    category: "Web Development",
  },
  {
    title: "E-COMMERCE APP",
    link: "https://github.com/dharmaseervi/amazon",
    description: "Amazon UI clone using html, css.",
    techStack: ["Css", "UI"],
    category: "Web Development",
  },
];

const Project = () => {
  return (
    <div className=" py-16">
    <div className="container mx-auto text-center bg-gradient-to-r py-10 rounded from-purple-800 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Explore My Projects
      </h1>
      <p className="text-lg mb-8">
        Check out the amazing projects I've worked on and discover the
        technologies I've used.
      </p>
    </div>

      <div className="container mx-auto mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="hover:shadow-lg w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-gradient-to-r  from-purple-800 to-indigo-900 text-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 h-full  ">
              <div className="p-6 flex flex-col h-full">
                {/* Project Title */}
                <h3 className="text-xl font-bold mb-4 cursor-pointer">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>

                {/* Tech Stack Icons */}
                <div className="mt-4 flex items-center space-x-2 text-gray-300">
                  <span className="mr-1">Tech Stack:</span>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xl mr-1 cursor-pointer">
                      {getTechIcon(tech)}
                    </span>
                  ))}
                </div>

                {/* Project Category */}
                <div className="mt-4 text-gray-300">
                  <span>Category: {project.category}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Function to map tech stack to icons
const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "react":
      return <FaReact />;
    case "firebase":
      return <FaFire />;
    case "express":
      return <RiComputerLine />;
    case "mongodb":
      return <RiCheckboxCircleFill />;
    case "e-commerce":
      return <RiShoppingCartLine />;
    case "expressjs":
      return <SiExpress />;
    case "axios":
      return <SiAxios />;
    case "JWT":
      return <SiJsonwebtokens />;
    case "bootstrap":
      return <FaBootstrap />;
    case "nodejs":
      return <FaNodeJs />;
    case "html":
      return <FaHtml5 />;
    case "css":
      return <FaCss3 />;
    case "javascript":
      return <FaJsSquare />;
    case "express-session":
      return <FaCode />;

    default:
      return tech;
  }
};

export default Project;
