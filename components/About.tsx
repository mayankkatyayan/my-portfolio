'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Skilled Full Stack Developer with expertise in React, Tailwind CSS, JavaScript, HTML, and CSS. Strong problem-solving
            skills in C++ and DSA, with experience in responsive web app development and leadership in project management and
            coding initiatives.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Passionate about creating efficient and user-friendly applications, I bring a blend of technical skills and creative
            problem-solving to every project.
          </p>
          <Link href="/experience">
            <motion.a 
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Experience
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

