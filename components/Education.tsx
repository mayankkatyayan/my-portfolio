"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationDetails = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Central Institute of Technology, Kokrajhar, Assam",
      year: "July 2021 - June 2025",
      result: "CGPA: 7.3",
      courses: "C++, DSA, Java, OOP, Computer Networks, Theory of Computation, Algorithms",
      achievements: "Built foundational skills in software development, algorithmic thinking, and complex problem-solving.",
      bgClass: "bg-gradient-to-r from-blue-600 to-blue-400", // Blue gradient
      textClass: "text-white", // White text for contrast
    },
    {
      title: "Prepared for JEE Mains and Advanced",
      institution: "Ignite Classes",
      year: "2020-21",
      result: "Not Qualified",
      courses: "Physics, Chemistry, Mathematics",
      achievements: "Strong foundation in science and mathematics, preparing for engineering and technology.",
      bgClass: "bg-gradient-to-r from-indigo-500 to-indigo-300", // Subtle purple-blue gradient
      textClass: "text-white",
    },
    {
      title: "Intermediate (12th) Grade",
      institution: "Millia Convent English School",
      year: "2020",
      result: "77.4% (CBSE)",
      courses: "Physics, Chemistry, Mathematics, Physical Education",
      achievements: "Strong foundation in science and mathematics, preparing for engineering and technology.",
      bgClass: "bg-gradient-to-r from-teal-500 to-teal-300", // Teal gradient
      textClass: "text-white",
    },
    {
      title: "10th Grade",
      institution: "St. Peter's English Medium School",
      year: "2018",
      result: "76.4% (CBSE)",
      courses: "Mathematics, Science, English, Social Science",
      achievements: "Excellence in foundational education, with top performance in Mathematics and Science.",
      bgClass: "bg-gradient-to-r from-green-500 to-green-300", // Green gradient
      textClass: "text-white",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {educationDetails.map((item, index) => (
            <motion.div
              key={index}
              className={`w-full max-w-2xl ${item.bgClass} p-6 rounded-lg shadow-lg text-white`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-lg font-medium mb-2">{item.institution}</p>
              <p className="text-sm mb-2">{item.year}</p>
              <p className="text-sm mb-2"><strong>Result:</strong> {item.result}</p>
              <p className="text-sm mb-2"><strong>Relevant Courses:</strong> {item.courses}</p>
              <p className="text-sm">{item.achievements}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animation Footer */}
        <motion.div
          className="flex justify-center mt-12"
          whileHover="hover"
          variants={{
            hover: { scale: 1.05, transition: { yoyo: Infinity } },
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
