"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // For handling images from the 'images' folder

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        {/* Contact Form Inside Card */}
        <motion.div
          className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.form
            className="flex flex-col space-y-6 mx-auto w-full"
            method="POST" // Set method for submitting the form
            action="https://formsubmit.co/mayank.katyayan123@gmail.com" // Replace with your form endpoint or backend API
          >
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border-2 border-blue-600 bg-transparent text-blue-600 focus:outline-none focus:border-blue-800 transition duration-300"
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border-2 border-blue-600 bg-transparent text-blue-600 focus:outline-none focus:border-blue-800 transition duration-300"
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 rounded-lg border-2 border-blue-600 bg-transparent text-blue-600 focus:outline-none focus:border-blue-800 transition duration-300"
              rows={4}
            ></textarea>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Reach Me
            </motion.button>
          </motion.form>
        </motion.div>

        {/* External Links Section - LinkedIn, GitHub, Email, etc. */}
        <div className="flex justify-center space-x-6 mt-8">
          {/* Email Icon */}
          <a href="mailto:mayank.katyayan123@gmail.com" className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            <Image
              src="/images/gmail.png" // Replace with actual path to your Gmail icon
              alt="Email"
              width={40}
              height={40}
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/mayankkat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            <Image
              src="/images/linkedin.png" // Replace with actual path to your LinkedIn icon
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            <Image
              src="/images/github.png" // Replace with actual path to your GitHub icon
              alt="GitHub"
              width={40}
              height={40}
            />
          </a>

          {/* Call Icon */}
          <a href="tel:+917301723504" className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            <Image
              src="/images/phone.png" // Replace with actual path to your Call icon
              alt="Call"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
