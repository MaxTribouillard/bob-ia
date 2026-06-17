import * as React from "react"

function Card({ className = "", children, ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      <div className="chat-wrapper">
        {children}
      </div>
    </div>
  )
}

export { Card }
