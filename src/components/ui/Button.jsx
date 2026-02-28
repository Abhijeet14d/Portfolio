import { forwardRef } from "react"

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700",
  secondary: "bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50",
  ghost: "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
  outline: "bg-transparent text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white",
  accent: "bg-neutral-900 text-accent-cyan border border-accent-cyan/20 hover:shadow-glow-cyan",
}

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  disabled = false,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-medium
        transition-all duration-150 ease-out
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
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

Button.displayName = "Button"

export default Button
