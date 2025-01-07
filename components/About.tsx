"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
            Skilled Full Stack Developer with expertise in React, Tailwind CSS,
            JavaScript, HTML, and CSS. Strong problem-solving skills in C++ and
            DSA, with experience in responsive web app development and
            leadership in project management and coding initiatives.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
            Passionate about creating efficient and user-friendly applications,
            I bring a blend of technical skills and creative problem-solving to
            every project.
          </p>
          <Link href="/experience">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-400 hover:to-blue-500 transition duration-300 shadow-lg dark:shadow-blue-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Experience
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
