import { useState } from "react"

function DiseaseDetector(){

  const [image,setImage] = useState(null)
  const [result,setResult] = useState("")

  const detectDisease = () => {

    const diseases = [
      "Leaf Blight detected. Use copper fungicide.",
      "Powdery Mildew detected. Spray sulfur solution.",
      "Healthy Plant 🌿",
      "Rust disease detected. Apply neem oil spray."
    ]

    const random = diseases[Math.floor(Math.random()*diseases.length)]

    setResult(random)
  }

  return (

    <div className="bg-white p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-4">
        🌿 Plant Disease Detection
      </h2>

      <input
        type="file"
        onChange={(e)=>setImage(e.target.files[0])}
        className="mb-3"
      />

      <button
        onClick={detectDisease}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Detect Disease
      </button>

      {result && (
        <p className="mt-4 font-semibold text-green-700">
          {result}
        </p>
      )}

    </div>
  )
}

export default DiseaseDetector