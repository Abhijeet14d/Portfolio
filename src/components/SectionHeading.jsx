const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignStyles = {
    center: "text-center mx-auto",
    left: "text-left",
  }

  return (
    <div className={`mb-16 md:mb-20 max-w-2xl ${alignStyles[align]}`}>
      <h2 className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-300 dark:to-neutral-700"></div>
        <div className="w-1.5 h-1.5 bg-accent-cyan"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-300 dark:to-neutral-700"></div>
      </div>
    </div>
  )
}

export default SectionHeading
