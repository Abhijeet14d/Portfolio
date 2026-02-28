import { forwardRef } from "react"

const Input = forwardRef(({ 
  label,
  error,
  className = "",
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 
          bg-white border border-neutral-200 
          text-neutral-900 placeholder-neutral-400
          focus:outline-none focus:border-neutral-400
          transition-colors duration-150
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
})

Input.displayName = "Input"

const Textarea = forwardRef(({ 
  label,
  error,
  className = "",
  rows = 5,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 
          bg-white border border-neutral-200 
          text-neutral-900 placeholder-neutral-400
          focus:outline-none focus:border-neutral-400
          resize-none
          transition-colors duration-150
          ${error ? 'border-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = "Textarea"

export { Input, Textarea }
export default Input
