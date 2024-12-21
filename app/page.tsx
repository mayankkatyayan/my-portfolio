import Carousel from "@/components/Carousel";
import Image from "next/image";


export default function Home() {
  return (
    <div ><Carousel />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        <Image
          className="rounded-full"
          src="/images/Profile.jpeg" // Replace with your profile picture URL
          alt="Mayank Katyayan"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">Mayank Katyayan</h1>
        <p className="text-lg text-center sm:text-left">
          Full Stack Developer & UI/UX Designer passionate about building beautiful and functional web applications.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/projects"
          >
            View My Projects
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mayankkatyayan" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/github.png" // Replace with your GitHub icon
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mayankkat/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/linkedin.png" // Replace with your LinkedIn icon
            alt="linkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
    </div>
  );
}
