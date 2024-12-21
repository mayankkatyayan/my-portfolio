import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "C++", "JavaScript", "Python", "React", "Tailwind CSS", "Laravel",
    "Git", "Figma", "Adobe Suite", "Google Colab", "MySQL", "SQLite"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.span 
              key={index} 
              className="bg-white px-4 py-2 rounded-full text-blue-600 font-semibold shadow-sm"
              variants={itemVariants}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

