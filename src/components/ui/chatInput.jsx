import * as React from "react"
import { useState } from "react"

function chatInput({className}){
    
    const [userText, setUserText] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log("Message du user : ", userText)
    }

    return(
        <>
        <div className="flex flex-row w-full">
            <form onSubmit={handleSumbit}>

                <input className="w-full" type="text" onChange={(e) => setUserText(e.target.value)} />
                <input className="bg-amber-100 hover:bg-amber-300" type="submit" value="Envoyer"/>

            </form>
        </div>
        </>
    )
}

export default chatInput