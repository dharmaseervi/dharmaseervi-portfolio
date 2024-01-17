import { motion } from "framer-motion";
import resume from '../assets/Dharma Resume.pdf';

const ResumeButton = () => {
  const downloadResume = () => {
    // Assuming your resume file is in the "src/assets" folder
    const resumeFilePath = resume;
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "Your_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={downloadResume}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold transition duration-300"
    >
      Download Resume
    </motion.button>
  );
};

export default ResumeButton;
