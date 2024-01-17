import { useParams } from "react-router-dom";
import { technicalSkills } from "./Blogs";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { skillId } = useParams();
  const skill = technicalSkills[skillId];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-100 min-h-screen flex justify-center items-center py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full  bg-white shadow-lg rounded-md overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 text-center mb-6"
          variants={textVariants}
        >
          <div className="text-6xl mb-4 flex justify-center">{skill.icon}</div>
          <motion.h1 className="text-4xl font-extrabold mb-2" variants={textVariants}>
            {skill.subtitle}
          </motion.h1>
          <motion.h2 className="text-2xl mb-4" variants={textVariants}>
            {skill.content}
          </motion.h2>
        </motion.div>
        <div className="p-6">
          <motion.div variants={textVariants}>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Description:
            </p>
            <p className="text-lg text-gray-600">{skill.details.description}</p>
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-xl font-semibold mb-4 text-gray-800">Features:</p>
            <ul className="list-disc pl-6 text-gray-600">
              {skill.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Use Cases:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              {skill.details.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </motion.div>

          {/* Refined Tips and Tricks Section */}
          <motion.div variants={textVariants}>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Tips and Tricks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skill.tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 rounded-md shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-purple-600">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Section 2 */}
          <motion.div variants={textVariants}>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Resources:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Resource 1: {skill.resources.resource1}</li>
              <li>Resource 2: {skill.resources.resource2}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
