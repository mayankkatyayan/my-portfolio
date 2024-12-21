export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:mayank.katyayan123@gmail.com" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Email Me
          </a>
          <a href="https://linkedin.com/in/mayankkat" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            LinkedIn
          </a>
          <a href="tel:+917301723504" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Call Me
          </a>
        </div>
      </div>
    </section>
  )
}

