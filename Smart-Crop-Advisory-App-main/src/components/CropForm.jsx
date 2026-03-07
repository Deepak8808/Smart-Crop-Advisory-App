import { useState } from "react"
import { motion } from "framer-motion"

function CropForm() {

  const [crop, setCrop] = useState("")

  const predictCrop = () => {

    const crops = ["Wheat 🌾", "Rice 🌾", "Maize 🌽", "Sugarcane 🌱"]

    const random = crops[Math.floor(Math.random() * crops.length)]

    setCrop(random)
  }

  return (

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-2xl shadow-xl"
    >

      <h2 className="text-xl font-bold text-green-700 mb-4">
        🌱 AI Crop Recommendation
      </h2>

      <input
        type="text"
        placeholder="Soil Type"
        className="w-full p-3 border rounded-lg mb-3"
      />

      <input
        type="text"
        placeholder="Location"
        className="w-full p-3 border rounded-lg mb-3"
      />

      <input
        type="text"
        placeholder="Season"
        className="w-full p-3 border rounded-lg mb-3"
      />

      <button
        onClick={predictCrop}
        className="bg-green-600 text-white w-full py-3 rounded-xl hover:bg-green-700"
      >
        Predict Best Crop
      </button>

      {crop && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-green-50 rounded-xl text-center"
        >

          <h3 className="text-lg font-bold text-green-700">
            Recommended Crop
          </h3>

          <p className="text-3xl font-bold mt-2">
            {crop}
          </p>

        </motion.div>

      )}

    </motion.div>

  )
}

export default CropForm