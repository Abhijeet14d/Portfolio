const variants = {
  default: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
  outline: "bg-transparent text-neutral-600 border border-neutral-300 hover:border-neutral-400",
  accent: "bg-neutral-900 text-accent-cyan",
}

const sizes = {
  sm: "px-2 py-1 text-[10px]",
  md: "px-3 py-1.5 text-xs",
  lg: "px-4 py-2 text-sm",
}

const Tag = ({ 
  children, 
  variant = "default", 
  size = "md",
  icon: Icon,
  className = "",
  ...props 
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium
        transition-colors duration-150
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  )
}

export default Tag
