const Card = ({ 
  children, 
  className = "", 
  hover = true,
  glass = false,
  gradient = false,
  ...props 
}) => {
  const baseStyles = "bg-white border border-neutral-200 p-6"
  const hoverStyles = hover ? "hover:border-neutral-300 hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200" : ""
  const glassStyles = glass ? "bg-white/75 backdrop-blur-xl border-neutral-100" : ""
  const gradientStyles = gradient ? "relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-br before:from-neutral-300 before:via-transparent before:to-neutral-300 before:-z-10" : ""

  return (
    <div
      className={`
        ${baseStyles}
        ${hoverStyles}
        ${glassStyles}
        ${gradientStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-medium text-neutral-900 ${className}`}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-neutral-500 mt-1 ${className}`}>
    {children}
  </p>
)

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
)

const CardFooter = ({ children, className = "" }) => (
  <div className={`mt-6 pt-4 border-t border-neutral-100 ${className}`}>
    {children}
  </div>
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card
