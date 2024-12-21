import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <motion.div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-2">Blogging Website</h3>
          <p className="text-gray-600 mb-4">Oct 2023</p>
          <p className="text-gray-700">Developed a blogging platform with CRUD for dynamic content management.</p>
          <p className="text-gray-600 mt-2">Tech Stack: HTML, CSS, PHP (Laravel)</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-2">Movie Ticket Booking System</h3>
          <p className="text-gray-600 mb-4">April 2024</p>
          <p className="text-gray-700">Boosted booking efficiency by 40% through intuitive UI design. Built a MySQL database for secure and efficient customer data management.</p>
          <p className="text-gray-600 mt-2">Tech Stack: React, MySQL</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-2">Fire and Flame Detection in IoT Sensors</h3>
          <p className="text-gray-600 mb-4">Mar 2024 - May 2024</p>
          <p className="text-gray-700">Created AI-driven flame detection with IoT sensors for real-time monitoring. YoloV5 finetune with the expected output using a general CCTV camera.</p>
          <p className="text-gray-600 mt-2">Tech Stack: YOLO model, Python, Google Colab, VS Code</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

