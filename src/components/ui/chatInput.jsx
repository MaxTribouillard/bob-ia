import * as React from "react"
import { useState } from "react"
import { Input } from "./input"

const ChatInput = ({ sendMessage }) => {
  const [userText, setUserText] = useState("")

  const handleMessage = async (e) => {

    e.preventDefault()

    console.log("Message du user : ", userText)

    const springApiURL = "http://localhost:8080/api/message"
    const model = "PHI-3.8"

    try{
        const res = await fetch(springApiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"message": userText})
        })
    }
    catch(e){
        console.log(e);
    }
    sendMessage(userText);

    setUserText("")
  }

  return (
    <form onSubmit={handleMessage} className="flex w-full items-center gap-2">
        <Input placeholder="Demander à Bob" value={userText} onChange={(e) => setUserText(e.target.value)}></Input>
        <input className="cursor-pointer p-2" type="submit" value="Envoyer"/>
    </form>

  )
}

export default ChatInput