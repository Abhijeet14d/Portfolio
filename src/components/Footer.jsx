import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Abhijeet14d",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhijeet-singh-394769248/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:abhijeetsingh28004@gmail.com",
    },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-neutral-900 text-sm font-medium">AS</span>
              </div>
              <span className="font-medium tracking-tight">Abhijeet Singh</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Backend Developer, Full Stack Developer, and DevOps Engineer passionate about 
              creating efficient and scalable solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>Roorkee, Uttarakhand</li>
              <li>India</li>
              <li>
                <a 
                  href="mailto:abhijeetsingh28004@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  abhijeetsingh28004@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919027451672"
                  className="hover:text-white transition-colors"
                >
                  +91 9027451672
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} Abhijeet Singh. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
