"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import chatAppImage from "../assets/quicktalk.png"
import notesAppImage from "../assets/notesapp.png"
import portfolioImage from "../assets/portfolio.png"
import secureLoginImage from "../assets/securelogin.png"
import docontimeImage from "../assets/docontime.png"
import weatherAppImage from "../assets/weather.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState([])

  const projects = [
    {
      id: 1,
      title: "QuickTalk",
      description: "Real-time chat application with private and group chat functionality using WebSocket technology.",
      image: chatAppImage,
      technologies: ["React", "Socket.IO", "Node.js", "Tailwind CSS"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/Chat-App",
      liveLink: "https://quicktalk-njxn.onrender.com/",
    },
    {
      id: 2,
      title: "DoctorOnTime",
      description: "Doctor appointment booking platform connecting patients with healthcare professionals.",
      image: docontimeImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Adarsh097/DoctorOnTime?tab=readme-ov-file",
      liveLink: "https://doctor-on-time-git-main-adarshgupta0601-gmailcoms-projects.vercel.app/",
    },
    {
      id: 3,
      title: "Note Taking App",
      description: "Simple note-taking application for creating, editing, and organizing notes efficiently.",
      image: notesAppImage,
      technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/NotesApp",
      liveLink: "https://weather-app-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, skills, and experience with responsive design.",
      image: portfolioImage,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: ["frontend"],
      githubLink: "https://github.com/Abhijeet14d/Abhijeet_Portfolio",
      liveLink: "www.abhijeetsingh123.me",
    },
    {
      id: 5,
      title: "Secure Login",
      description: "Authentication system for secure user login and account management.",
      image: secureLoginImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
      category: ["frontend", "backend", "fullstack"],
      githubLink: "https://github.com/Abhijeet14d/SecureLogin",
      liveLink: "https://securelogin-8uzd.onrender.com/",
    },
    {
      id: 6,
      title: "Weather App",
      description: "Weather forecasting app providing real-time updates using OpenWeatherMap API.",
      image: weatherAppImage,
      technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
      category: ["frontend"],
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://blog-platform-demo.com",
    },
  ]

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => project.category.includes(filter))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id"))
            setVisibleProjects((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const projectItems = document.querySelectorAll(".project-card")
    projectItems.forEach((item) => observer.observe(item))

    return () => projectItems.forEach((item) => observer.unobserve(item))
  }, [filteredProjects])

  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading title="Projects" subtitle="Selected work and side projects" />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`
                px-5 py-2.5 text-sm font-medium transition-all duration-200
                ${filter === id
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              data-id={project.id}
              className={`
                project-card group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 
                hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-medium
                transition-all duration-300
                ${visibleProjects.includes(project.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
                }
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
                    aria-label="View code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
                    aria-label="View live"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 dark:text-white font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex items-center gap-1 group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
