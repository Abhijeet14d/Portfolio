const Section = ({ 
  children, 
  className = "",
  id,
  alternate = false,
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`
        py-24 md:py-32
        ${alternate ? 'bg-neutral-50' : 'bg-white'}
        ${className}
      `}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}

const SectionHeader = ({ 
  title, 
  subtitle,
  align = "center",
  className = "" 
}) => {
  const alignStyles = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  }

  return (
    <div className={`mb-16 md:mb-20 max-w-2xl ${alignStyles[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-300"></div>
        <div className="w-1.5 h-1.5 bg-accent-cyan"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-300"></div>
      </div>
    </div>
  )
}

export { Section, SectionHeader }
export default Section
