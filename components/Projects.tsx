"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null); // Reference for the container
  const [inView, setInView] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Update state when in view
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the referenced element
    }

    return () => {
      if (ref.current) {
        observer.disconnect(); // Cleanup observer
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="projects-container min-h-screen p-10 bg-gradient-to-b from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800"
    >
      <h2
        className={`text-4xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        My Projects
      </h2>
      <p
        className={`text-lg text-center mb-8 text-gray-700 dark:text-gray-300 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Explore some of my featured projects showcasing my technical expertise
        and creative problem-solving skills.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Blogging Website
          </h3>
          <p className="text-sm text-gray-500 mb-4">Oct 2023</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Developed a blogging platform with CRUD functionality for dynamic
            content management.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: HTML, CSS, PHP (Laravel)
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Movie Ticket Booking System
          </h3>
          <p className="text-sm text-gray-500 mb-4">April 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Boosted booking efficiency by 40% through intuitive UI design.
            Built a MySQL database for secure and efficient customer data
            management.
          </p>
          <p className="text-sm text-gray-500 mb-4">Tech Stack: React, MySQL</p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Fire and Flame Detection in IoT Sensors
          </h3>
          <p className="text-sm text-gray-500 mb-4">Mar 2024 - May 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Created AI-driven flame detection with IoT sensors for real-time
            monitoring.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: YOLO Model, Python, Google Colab
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Blogging Website
          </h3>
          <p className="text-sm text-gray-500 mb-4">Oct 2023</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Developed a blogging platform with CRUD functionality for dynamic
            content management.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: HTML, CSS, PHP (Laravel)
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Movie Ticket Booking System
          </h3>
          <p className="text-sm text-gray-500 mb-4">April 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Boosted booking efficiency by 40% through intuitive UI design.
            Built a MySQL database for secure and efficient customer data
            management.
          </p>
          <p className="text-sm text-gray-500 mb-4">Tech Stack: React, MySQL</p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Fire and Flame Detection in IoT Sensors
          </h3>
          <p className="text-sm text-gray-500 mb-4">Mar 2024 - May 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Created AI-driven flame detection with IoT sensors for real-time
            monitoring.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: YOLO Model, Python, Google Colab
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Blogging Website
          </h3>
          <p className="text-sm text-gray-500 mb-4">Oct 2023</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Developed a blogging platform with CRUD functionality for dynamic
            content management.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: HTML, CSS, PHP (Laravel)
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Movie Ticket Booking System
          </h3>
          <p className="text-sm text-gray-500 mb-4">April 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Boosted booking efficiency by 40% through intuitive UI design.
            Built a MySQL database for secure and efficient customer data
            management.
          </p>
          <p className="text-sm text-gray-500 mb-4">Tech Stack: React, MySQL</p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 dark:border-purple-600"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Fire and Flame Detection in IoT Sensors
          </h3>
          <p className="text-sm text-gray-500 mb-4">Mar 2024 - May 2024</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Created AI-driven flame detection with IoT sensors for real-time
            monitoring.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tech Stack: YOLO Model, Python, Google Colab
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 dark:hover:bg-purple-700 transition-all"
          >
            Details
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
