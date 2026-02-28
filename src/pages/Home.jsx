"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Accent decorations */}
      <div className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-32 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-accent-cyan hidden lg:block"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 z-10 relative py-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm mb-8
              transition-all duration-700 delay-100
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="w-2 h-2 bg-accent-lime animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className={`
              text-5xl md:text-7xl lg:text-8xl font-light text-neutral-900 dark:text-white tracking-tight mb-6
              transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            Abhijeet
            <br />
            <span className="font-normal">Singh</span>
          </h1>

          {/* Role */}
          <div
            className={`
              flex flex-wrap gap-3 mb-8
              transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <span className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
              Backend Developer
            </span>
            <span className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
              DevOps Engineer
            </span>
            <span className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
              Full Stack Developer
            </span>
          </div>

          {/* Description */}
          <p
            className={`
              text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl mb-12
              transition-all duration-700 delay-400
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            Building robust, scalable applications with modern technologies. 
            Specializing in backend systems, cloud infrastructure, and full-stack solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 mb-16
              transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <a
              href="https://docs.google.com/document/d/1uLoG7zSmeMtQ2mIQ9sWcwGKQabZNMflkRyLuvt6t0kg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all active:scale-[0.98]"
            >
              Download Resume
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-[0.98]"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`
              flex items-center gap-6
              transition-all duration-700 delay-600
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <span className="text-sm text-neutral-400 font-medium">Connect</span>
            <div className="w-8 h-px bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abhijeet14d"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeet-singh-394769248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abhijeetsingh28004@gmail.com"
                className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`
            absolute bottom-8 left-1/2 -translate-x-1/2
            transition-all duration-700 delay-700
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
