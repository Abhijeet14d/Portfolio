"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = ["home", "about", "skills", "projects", "education", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled 
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-soft" 
          : "bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
        }
      `}
    >
      <div className="container mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-neutral-900 dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-neutral-900 text-sm font-medium">AS</span>
          </div>
          <span className="text-neutral-900 dark:text-white font-medium tracking-tight hidden sm:block">
            Abhijeet Singh
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative px-4 py-2 text-sm font-medium transition-colors duration-150
                ${activeSection === item.id
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }
              `}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-neutral-900 dark:bg-white"></span>
              )}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle & Contact Button - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="mailto:abhijeetsingh28004@gmail.com"
            className="flex items-center gap-2 px-5 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "max-h-96 border-t border-neutral-100 dark:border-neutral-800" : "max-h-0"}
        `}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1 bg-white dark:bg-neutral-950">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-4 py-3 text-sm font-medium text-left transition-colors
                ${activeSection === item.id
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
                }
              `}
            >
              {item.name}
            </button>
          ))}
          <a
            href="mailto:abhijeetsingh28004@gmail.com"
            className="mt-2 px-4 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium text-center hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
