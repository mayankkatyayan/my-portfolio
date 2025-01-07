"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "C++",
    "JavaScript",
    "Python",
    "React",
    "Tailwind CSS",
    "Laravel",
    "Git",
    "Figma",
    "Adobe Suite",
    "Google Colab",
    "MySQL",
    "SQLite",
  ];

  const scrollingVariants = {
    scroll: {
      x: [0, -skills.length * 150], // Assuming 40px height per item
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: skills.length * 10, // Adjust speed of scrolling here
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>
      <div className="max-w-4xl mx-auto ">
        <motion.div
          className="overflow-hidden w-full relative" 
        >
          <motion.div
            className="flex items-center"
            variants={scrollingVariants}
            animate="scroll"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 mx-2 rounded-full text-blue-600 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-100 transition duration-300"
                style={{ minWidth: "150px" }}
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Engineer Applications */}
        <motion.div
          className="bg-blue-50 p-6 rounded-lg shadow-lg text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            How I Apply My Skills
          </h3>
          <p className="text-gray-700 mb-4">
            As a Full Stack Engineer, I leverage my skills to design, build, and
            deliver user-friendly and efficient web solutions. Whether it's
            developing a responsive front-end with React or optimizing
            back-end systems with Laravel and MySQL, I ensure seamless
            functionality and performance.
          </p>
          <p className="text-gray-700">
            Collaboration tools like Git, coupled with creative platforms like
            Figma, enable me to bring designs to life and work efficiently in a
            team setting.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          whileHover="hover"
          variants={{
            hover: { scale: 1.1, transition: { yoyo: Infinity } },
          }}
        >
          <motion.div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-full shadow-md">
            <h3 className="text-white font-bold text-lg">
              "Building the Future, One Line of Code at a Time"
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
