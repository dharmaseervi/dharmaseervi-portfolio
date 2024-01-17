import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaCoffee,
  FaBriefcase,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaLaptopCode,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  const education = [
    {
      institute: "JAIN (DEEMED-TO-BE UNIVERSITY)",
      degree: "Bachelor of Technology in Software Engineering",
      period: "July 2023",
      location: "Bangalore, KA",
      percentage: "Aggregate PER: 78%",
    },
    {
      institute: "VIDHYA ASHRAM",
      degree: "Senior Secondary",
      period: "June 2018",
      location: "Mysore, KA",
      percentage: "Aggregate PER: 60%",
    },
    {
      institute: "PUSHPA EDUCATION INSTITUTION",
      degree: "High School",
      period: "June 2016",
      location: "Mysore, KA",
      percentage: "Aggregate PER: 74.5%",
    },
  ];
  const backendSkills = [
    { icon: <FaCode />, text: "Full Stack Development" },
    { icon: <FaNodeJs />, text: "Node.js" },
    { icon: <FaDatabase />, text: "MongoDB" },
    { icon: <FaServer />, text: "Express.js" },
    { icon: <FaCodeBranch />, text: "Git & Version Control" },
    { icon: <FaBriefcase />, text: "REST API Development" },
    { icon: <FaBriefcase />, text: "Postman" },
  ];

  const frontendSkills = [
    { icon: <FaReact />, text: "React.js" },
    { icon: <FaHtml5 />, text: "HTML5" },
    { icon: <FaCss3Alt />, text: "CSS3" },
    { icon: <FaCode />, text: "JavaScript" },
    { icon: <FaCoffee />, text: "UI/UX Design" },
    { icon: <FaBriefcase />, text: "Bootstrap" },
    { icon: <FaBriefcase />, text: "Tailwind CSS" },
    { icon: <FaBriefcase />, text: "Framer Motion" },
  ];

  const selfTaughtExperience = [
    {
      year: "2019 - Present",
      position: "Self-Taught Developer",
      company: "Personal Projects",
    },
  ];

  const links = {
    github: "https://github.com/dharmaseervi",
    linkedin: "https://www.linkedin.com/in/dharmaseervi/",
    twitter: "https://twitter.com/SeerviDharma",
  };

  const contactInfo = {
    email: "dharmaseervijb18239@gmail.com",
    phone: "+91-9902464181",
    location: "Bangalore, KA",
  };

  const courses = [
    {
      title: "Cisco Software Engineering Program Web Development Bootcamp",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cisco/kinDTvjiZRcYbwqLo_Cisco_QaSMQHSkyBQDBgHS2_1689841349999_completion_certificate.pdf",
    },
    {
      title: "Accenture Developer Program",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_QaSMQHSkyBQDBgHS2_1691409373962_completion_certificate.pdf",
    },
    {
      title: "Web Development Bootcamp",
      link: "https://www.udemy.com/certificate/UC-bb92b431-b55a-40a6-a1a0-3f18b898886c/",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-indigo-800 to-purple-900 text-white p-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center text-shadow"
          variants={textVariants}
        >
          <h2 className="text-5xl font-bold mb-6">Hello, I'm Dharma!</h2>
          <p className="text-lg text-gray-300 mb-10 leading-loose">
            A passionate computer science engineering graduate from Jain
            University, Bangalore, with a specialization in software
            engineering. I've achieved an overall CGPA of 8.2, demonstrating a
            strong academic background. My keen interest lies in web
            development, and I have gained hands-on experience through various
            projects undertaken during my college years. Being from Bangalore, I
            am well-versed in the vibrant tech culture of this city. I am
            excited about the opportunity to leverage my skills and enthusiasm
            as a web developer to contribute effectively to your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">
                Backend Developer
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg shadow-lg bg-indigo-700 hover:bg-indigo-600 transform transition-transform ease-in-out duration-300 hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-gray-300">{skill.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">
                Frontend Developer
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-8 ">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg shadow-lg  bg-indigo-700 hover:bg-indigo-600 transform transition-transform ease-in-out duration-300 hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-gray-300">{skill.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-2">
            <div className="grid space-y-1 ">
              <h3 className="text-3xl font-extrabold mb-4 text-blue-300">
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-800 p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 hover:scale-105"
                >
                  <p className="text-sm">{edu.period}</p>
                  <p className="text-sm font-serif font-semibold">
                    {edu.institute}
                  </p>
                  <p className="text-sm">{edu.degree}</p>
                  <p className="text-sm">{edu.location}</p>
                  <p className="text-sm">{edu.percentage}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-extrabold mb-4 text-blue-300">
                Contact Information
              </h3>
              <motion.div className="bg-blue-800  p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 hover:scale-105">
                <p className="text-sm">
                  <FaEnvelope className="inline-block mr-2" />{" "}
                  {contactInfo.email}
                </p>
                <p className="text-sm">
                  <FaPhone className="inline-block mr-2" /> {contactInfo.phone}
                </p>
                <p className="text-sm">
                  <FaLaptopCode className="inline-block mr-2" />{" "}
                  {contactInfo.location}
                </p>
              </motion.div>
              <h3 className="text-3xl font-extrabold mb-4 text-blue-300">
                Links
              </h3>
              <motion.div className="bg-blue-800  p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 hover:scale-105">
                <a
                  href={links.github}
                  className=" hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="inline-block mr-1" /> GitHub
                </a>
                <br />
                <a
                  href={links.linkedin}
                  className=" hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="inline-block mr-1" /> LinkedIn
                </a>
                <br />
                <a
                  href={links.twitter}
                  className=" hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="inline-block mr-1" /> Twitter
                </a>
              </motion.div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">
                Self-Taught Experience
              </h3>
              {selfTaughtExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 hover:scale-105"
                >
                  <p className="text-xl text-purple-800">{exp.year}</p>
                  <p className="text-gray-700">{exp.position}</p>
                  <p className="text-gray-700">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="m-3 p-2  flex justify-center items-center rounded   ">
        <div className="flex flex-col ">
          <h3 className="text-3xl font-extrabold mb-4 text-center text-blue-300">
            Courses
          </h3>
          {courses.map((course, index) => (
            <motion.section
              key={index}
              className="bg-blue-800 mt-2 p-6 rounded-lg shadow-lg transform transition-transform ease-in-out duration-300 hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <p className="m-2">{course.title}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                View certificate
              </a>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
