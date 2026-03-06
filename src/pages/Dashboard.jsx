import { motion } from "framer-motion"

import WeatherCard from "../components/WeatherCard"
import CropForm from "../components/CropForm"
import MarketPrices from "../components/MarketPrices"
import FarmMap from "../components/FarmMap"
import Chatbot from "../components/Chatbot"
import YieldGraph from "../components/YieldGraph"
import DiseaseDetector from "../components/DiseaseDetector"
import VoiceAssistant from "../components/VoiceAssistant"
import FarmerProfile from "../components/FarmerProfile"

function Dashboard(){

return(

<div className="w-full">

{/* HERO SECTION WITH VIDEO */}

<section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

<video
autoPlay
loop
muted
playsInline
className="absolute top-0 left-0 w-full h-full object-cover"
>
<source src="/farm.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 px-6">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-4xl md:text-7xl font-bold text-green-400"
>
🌾 Smart AI Farming Platform
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
>
AI powered crop advisory using weather data,
soil analytics and predictive farming intelligence.
</motion.p>

<motion.button
whileHover={{scale:1.1}}
className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-white text-lg shadow-xl"
>
Start Smart Farming
</motion.button>

</div>

</section>


<div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

{/* AGRICULTURE IMAGE SECTION */}

<section className="grid md:grid-cols-2 gap-10 items-center">

<motion.img
initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
className="rounded-2xl shadow-xl"
/>

<motion.div
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
>

<h2 className="text-4xl font-bold text-green-500">
AI Agriculture Intelligence
</h2>

<p className="text-gray-300 mt-4 text-lg">
Our platform helps farmers make better decisions using
AI crop prediction, weather insights, disease detection
and real-time market analysis.
</p>

</motion.div>

</section>


{/* MAIN DASHBOARD CARDS */}

<section>

<h2 className="text-3xl font-bold text-green-400 mb-8">
Farm Analytics Dashboard
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<motion.div whileHover={{scale:1.05}}>
<WeatherCard/>
</motion.div>

<motion.div whileHover={{scale:1.05}}>
<CropForm/>
</motion.div>

<motion.div whileHover={{scale:1.05}}>
<MarketPrices/>
</motion.div>

<motion.div whileHover={{scale:1.05}}>
<FarmerProfile/>
</motion.div>

</div>

</section>


{/* MAP + CHATBOT */}

<section>

<h2 className="text-3xl font-bold text-green-400 mb-8">
Farm Monitoring
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<motion.div whileHover={{scale:1.02}}>
<FarmMap/>
</motion.div>

<motion.div whileHover={{scale:1.02}}>
<Chatbot/>
</motion.div>

</div>

</section>


{/* AI TOOLS */}

<section>

<h2 className="text-3xl font-bold text-green-400 mb-8">
AI Farming Tools
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<motion.div whileHover={{scale:1.05}}>
<YieldGraph/>
</motion.div>

<motion.div whileHover={{scale:1.05}}>
<DiseaseDetector/>
</motion.div>

<motion.div whileHover={{scale:1.05}}>
<VoiceAssistant/>
</motion.div>

</div>

</section>


{/* PARALLAX FARM SECTION */}

<section
className="h-[400px] flex items-center justify-center text-white text-center rounded-2xl"
style={{
backgroundImage:"url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9)",
backgroundAttachment:"fixed",
backgroundSize:"cover"
}}
>

<div className="bg-black/50 p-10 rounded-xl">

<h2 className="text-4xl font-bold">
Empowering Farmers with AI 🌾
</h2>

<p className="mt-3 text-lg">
Smart Agriculture for a Sustainable Future
</p>

</div>

</section>


{/* FARMING IMAGE GALLERY */}

{/* FARMING IMAGE GALLERY */}

{/* AUTO SCROLL FARMING GALLERY */}

<section className="py-20 overflow-hidden">

<h2 className="text-3xl font-bold text-green-400 text-center mb-10">
🌾 Smart Farming Gallery
</h2>

<div className="relative w-full overflow-hidden">

<div className="flex gap-6 animate-scroll">

<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854" className="h-60 w-96 object-cover rounded-xl"/>

{/* Duplicate images for infinite scroll */}

<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf" className="h-60 w-96 object-cover rounded-xl"/>

<img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399" className="h-60 w-96 object-cover rounded-xl"/>

</div>

</div>

</section>

</div>

</div>

)

}

export default Dashboard