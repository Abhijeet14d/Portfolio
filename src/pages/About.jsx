import { MapPin, Mail, Clock, Terminal, Server, Code } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import profileImage from "../assets/profile.png"

const About = () => {
  const highlights = [
    { icon: Terminal, label: "Backend" },
    { icon: Server, label: "DevOps" },
    { icon: Code, label: "Full Stack" },
  ]

  const infoCards = [
    {
      icon: MapPin,
      title: "Location",
      value: "Roorkee, Uttarakhand",
    },
    {
      icon: Mail,
      title: "Email",
      value: "abhijeetsingh28004@gmail.com",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open for Opportunities",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Background, expertise, and what drives me as a developer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-neutral-200 dark:from-neutral-700 via-transparent to-neutral-200 dark:to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2">
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Abhijeet Singh"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay accent */}
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent-cyan"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-6">
                Backend Developer, Full Stack Developer & DevOps Engineer
              </h3>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm"
                  >
                    <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I specialize in backend development with Node.js and databases, while also being 
                  proficient in DevOps practices and full stack development. My approach combines 
                  technical expertise with a focus on creating scalable, maintainable solutions.
                </p>
                <p>
                  With a passion for continuous learning, I stay updated with the latest technologies 
                  and best practices in software development, cloud infrastructure, and system architecture.
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="group p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-soft transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors">
                      <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">{title}</h4>
                      <p className="text-neutral-900 dark:text-neutral-100 text-sm break-all">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
