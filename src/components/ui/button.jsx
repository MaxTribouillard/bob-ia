import * as React from "react"

function Button({ 
  className = "", 
  variant = "primary", 
  children, 
  ...props 
}) {
  const variantClass = `btn-${variant}`
  
  return (
    <button
      className={`${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
