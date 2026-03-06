import { motion } from "framer-motion"

function Hero() {

  return (

    <div className="text-center py-20">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-green-700"
      >
        🌾 AI Powered Smart Farming
      </motion.h1>

      <p className="mt-6 text-gray-600 text-lg">
        Get intelligent crop recommendations using soil, weather and season data
      </p>

      <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700">
        Start Prediction
      </button>

    </div>

  )
}

export default Hero