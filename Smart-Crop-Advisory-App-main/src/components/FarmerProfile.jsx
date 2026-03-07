import { motion } from "framer-motion"

function FarmerProfile(){

return(

<motion.div
whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white"
>

{/* Farmer Profile Header */}

<div className="flex items-center gap-4">

<img
src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
className="w-16 h-16 rounded-full border-2 border-green-400"
/>

<div>

<h2 className="text-xl font-bold text-green-400">
Farmer Deepak
</h2>

<p className="text-sm text-gray-300">
📍 Uttar Pradesh, India
</p>

</div>

</div>


{/* Farm Stats */}

<div className="grid grid-cols-3 gap-4 mt-6 text-center">

<div className="bg-black/30 p-3 rounded-xl">
<p className="text-green-400 text-lg font-bold">12</p>
<p className="text-xs text-gray-300">Acres</p>
</div>

<div className="bg-black/30 p-3 rounded-xl">
<p className="text-green-400 text-lg font-bold">4</p>
<p className="text-xs text-gray-300">Crops</p>
</div>

<div className="bg-black/30 p-3 rounded-xl">
<p className="text-green-400 text-lg font-bold">8 yrs</p>
<p className="text-xs text-gray-300">Experience</p>
</div>

</div>


{/* Current Crops */}

<div className="mt-6">

<h3 className="text-green-300 font-semibold mb-2">
🌾 Current Crops
</h3>

<div className="flex flex-wrap gap-2">

<span className="bg-green-500/20 px-3 py-1 rounded-lg text-sm">
Wheat
</span>

<span className="bg-green-500/20 px-3 py-1 rounded-lg text-sm">
Rice
</span>

<span className="bg-green-500/20 px-3 py-1 rounded-lg text-sm">
Mustard
</span>

</div>

</div>


{/* Smart Farming Status */}

<div className="mt-6 bg-green-500/20 p-3 rounded-xl text-center">

<p className="text-green-300 text-sm">
🌱 Smart Farming Status
</p>

<p className="text-lg font-bold text-green-400">
AI Monitoring Active
</p>

</div>

</motion.div>

)

}

export default FarmerProfile