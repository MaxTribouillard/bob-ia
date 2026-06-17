import { useState } from 'react'
import { Card } from './components/ui/card'
import ChatInput from './components/ui/chatInput'
import ChatMessage from "./components/ui/chatMessage"
import './App.css'

function App() {
  const [messages, setMessage] = useState([
    { text: "Salut, moi c'est Bob. Comment puis-je t'aider ?", isUser: false }
  ])

  const sendMessage = async (userText) => {
    const springApiURL = "http://localhost:8080/api/message"
    const model = "phi-3-mini-4k-instruct"

    setMessage((prev) => [...prev, { text: userText, isUser: true }])

    try {
      const res = await fetch(springApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message": userText, "model": model })
      })
      console.log(JSON.stringify({ "message": userText, "model": model }))

      const data = await res.json()
      setMessage((prev) => [...prev, { text: data.response, isUser: false }])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="app-container">
      <Card>
        <ChatMessage 
          messages={messages}
          botAvatarUrl={"/bob.png"}
        />
        <ChatInput sendMessage={sendMessage} />
      </Card>
    </div>
  )
}

export default App
