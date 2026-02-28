"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, ArrowRight, Check } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Roorkee, Uttarakhand",
      subvalue: "India",
    },
    {
      icon: Mail,
      label: "Email",
      value: "abhijeetsingh28004@gmail.com",
      href: "mailto:abhijeetsingh28004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9027451672",
      href: "tel:+919027451672",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading title="Contact" subtitle="Let's discuss your project or opportunity" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-6">
                Get in touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, subvalue, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                      <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-neutral-900 dark:text-white">{value}</p>
                      )}
                      {subvalue && <p className="text-neutral-500 dark:text-neutral-400 text-sm">{subvalue}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Download Resume</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                Get a copy of my full resume with detailed experience.
              </p>
              <a
                href="https://docs.google.com/document/d/1uLoG7zSmeMtQ2mIQ9sWcwGKQabZNMflkRyLuvt6t0kg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
              >
                Download CV
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-8">
              <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-8">Send a message</h3>

              {isSubmitted ? (
                <div className="flex items-center gap-4 p-6 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  <div className="p-2 bg-neutral-900 dark:bg-white">
                    <Check className="w-5 h-5 text-white dark:text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-neutral-900 dark:text-white font-medium">Message sent successfully</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 resize-none transition-colors"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium py-4 px-6 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
