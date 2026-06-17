import * as React from "react"

function ChatMessage({ messages, botAvatarUrl = "null" }) {
  const messagesEndRef = React.useRef(null)

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-wrapper ${msg.isUser ? 'user' : 'bot'}`}
        >
          {!msg.isUser && (
            <div className="message-avatar">
              {botAvatarUrl ? (
                <img src={botAvatarUrl} alt="Bob" />
              ) : (
                <span className="placeholder">B</span>
              )}
            </div>
          )}
          <div className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessage