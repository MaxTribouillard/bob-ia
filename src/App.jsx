import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Card} from './components/ui/Card'
import ChatInput from './components/ui/chatInput'
import './App.css'

const sendMessage = async (userText) => {
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
      const data = await res.json();
      console.log("reponse du back : ", data);
      
  }
  catch(e){
      console.log(e);
  }
}

function App() {

  return (
    <>
      <Card className="bottom-100">
        <ChatInput sendMessage={sendMessage}></ChatInput>
      </Card>
    </>
  )
}

export default App
