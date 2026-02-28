"use client"

import { useState } from "react"
import { Terminal, Server, Users, Code, Database, GitBranch, Cloud, Palette, Clock, Lightbulb } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const tabs = [
    { id: "technical", label: "Technical", icon: Terminal },
    { id: "tools", label: "Tools", icon: Server },
    { id: "soft", label: "Soft Skills", icon: Users },
  ]

  const skillCategories = {
    technical: [
      {
        category: "Frontend Development",
        skills: ["JavaScript", "React.js", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
      },
      {
        category: "Backend Development",
        skills: ["Node.js", "Express.js", "C++", "MongoDB", "SQL"],
      },
      {
        category: "Other Technologies",
        skills: ["RESTful APIs", "Socket.IO", "Authentication", "State Management", "Testing"],
      },
    ],
    tools: [
      {
        category: "Development Tools",
        skills: ["Git & GitHub", "VS Code", "Postman", "Chrome DevTools", "npm/yarn"],
      },
      {
        category: "DevOps & Deployment",
        skills: ["Docker", "Jenkins", "AWS", "Vercel", "Render"],
      },
      {
        category: "Design & Collaboration",
        skills: ["Figma", "Jira", "Slack", "Notion", "Trello"],
      },
    ],
    soft: [
      {
        category: "Problem Solving",
        skills: ["Analytical Thinking", "Debugging", "Algorithm Design", "Research Skills", "Creative Solutions"],
      },
      {
        category: "Collaboration",
        skills: ["Team Communication", "Pair Programming", "Code Reviews", "Knowledge Sharing", "Conflict Resolution"],
      },
      {
        category: "Work Management",
        skills: ["Time Management", "Project Planning", "Adaptability", "Attention to Detail", "Self-Motivation"],
      },
    ],
  }

  const categoryIcons = {
    "Frontend Development": Code,
    "Backend Development": Terminal,
    "Other Technologies": Database,
    "Development Tools": GitBranch,
    "DevOps & Deployment": Cloud,
    "Design & Collaboration": Palette,
    "Problem Solving": Lightbulb,
    "Collaboration": Users,
    "Work Management": Clock,
  }

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-neutral-200 dark:border-neutral-700 p-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`
                  flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200
                  ${activeTab === id
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories[activeTab].map((category, categoryIndex) => {
            const Icon = categoryIcons[category.category] || Code
            return (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-800">
                    <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{category.category}</h3>
                  <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group p-4 bg-neutral-50 dark:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-soft transition-all duration-200"
                    >
                      <span className="text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-24 pt-16 border-t border-neutral-100 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-2">15+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-2">10+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Tools & Platforms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-2">6+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-2">3+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
