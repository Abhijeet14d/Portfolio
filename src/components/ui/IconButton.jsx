import { forwardRef } from "react"

const variants = {
  default: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900",
  ghost: "bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
  outline: "bg-transparent text-neutral-600 border border-neutral-300 hover:border-neutral-400",
  dark: "bg-neutral-900 text-white hover:bg-neutral-800",
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

const IconButton = forwardRef(({ 
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center
        transition-all duration-150 ease-out
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
})

IconButton.displayName = "IconButton"

export default IconButton
