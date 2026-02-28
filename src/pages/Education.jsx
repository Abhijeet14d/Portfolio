"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([])

  const educationHistory = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2022 — 2026",
      description: "Currently pursuing B.Tech in Computer Science with focus on software development and DevOps. Active participant in coding competitions and hackathons.",
      current: true,
    },
    {
      id: 2,
      degree: "Intermediate in Science",
      institution: "Shemford School",
      location: "Roorkee, Uttarakhand",
      period: "2020 — 2021",
      description: "Completed intermediate studies with focus on science and mathematics. Built strong foundation in analytical thinking and problem-solving.",
      current: false,
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "Shemford School",
      location: "Roorkee, Uttarakhand",
      period: "2018 — 2019",
      description: "Completed matriculation with focus on science and mathematics. Participated in various extracurricular activities and competitions.",
      current: false,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id"))
            setVisibleItems((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => observer.observe(item))

    return () => timelineItems.forEach((item) => observer.unobserve(item))
  }, [])

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading title="Education" subtitle="Academic journey and qualifications" />

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>

            {educationHistory.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                className={`
                  timeline-item relative pl-8 md:pl-20 pb-16 last:pb-0
                  transition-all duration-500
                  ${visibleItems.includes(item.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className={`
                  absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-1/2
                  ${item.current ? "bg-accent-cyan" : "bg-neutral-300 dark:bg-neutral-600"}
                `}></div>

                {/* Content card */}
                <div className="group bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600 hover:shadow-soft p-6 transition-all">
                  {/* Period badge */}
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                    {item.current && (
                      <span className="px-2 py-0.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[10px] uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
