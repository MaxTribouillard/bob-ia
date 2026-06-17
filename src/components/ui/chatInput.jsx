import * as React from "react"
import { useState } from "react"

const ChatInput = ({ sendMessage }) => {
  const [userText, setUserText] = useState("")

  const handleMessage = async (e) => {
    e.preventDefault()
    if (!userText.trim()) return

    const text = userText
    setUserText("")
    console.log("Message du user : ", text)

    const springApiURL = "http://localhost:8080/api/message"
    const model = "PHI-3.8"

    try {
      const res = await fetch(springApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message": text })
      })
      console.log(JSON.stringify({ "message": text }))
    } catch (e) {
      console.log(e)
    }

    sendMessage(text)
  }

  return (
    <form onSubmit={handleMessage} className="chat-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Demander à Bob..."
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          autoFocus
        />
        <button type="submit">Envoyer</button>
      </div>
    </form>
  )
}

export default ChatInput