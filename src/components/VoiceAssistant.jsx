import { useState } from "react"

function VoiceAssistant(){

  const [text,setText] = useState("")

  const startListening = () => {

    const recognition = new window.webkitSpeechRecognition()

    recognition.lang = "en-IN"

    recognition.onresult = (event)=>{
      setText(event.results[0][0].transcript)
    }

    recognition.start()
  }

  return(

    <div className="bg-white p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-4">
        🎤 Voice Assistant
      </h2>

      <button
        onClick={startListening}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Start Speaking
      </button>

      {text && (

        <p className="mt-4 font-semibold">
          You said: {text}
        </p>

      )}

    </div>
  )
}

export default VoiceAssistant