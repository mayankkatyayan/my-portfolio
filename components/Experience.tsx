"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-teal-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-teal-600 dark:text-teal-300 mb-12">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience 1 */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:shadow-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-2">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              OneON, Bengaluru | Jan 2024 - May 2024
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Enhanced user engagement by 25% through a responsive web
                application for the Tours sector.
              </li>
              <li>
                Optimized UI with React and Tailwind CSS, increasing site speed
                by 30%.
              </li>
              <li>
                Streamlined development cycles by reducing code complexity by
                15%.
              </li>
            </ul>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:shadow-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-2">
              UI/UX Designer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La Garage, Mumbai | Sep 2022 - Mar 2023
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Increased user retention by 15% through user-focused design and
                interactive prototypes.
              </li>
              <li>
                Designed wireframes with Photoshop, Figma, and Illustrator for
                seamless development communication.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
