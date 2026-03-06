import { useEffect, useState } from "react"

function Chatbot(){

const chats = [

{
q:"My rice leaves are turning yellow",
a:"Add nitrogen fertilizer and check water drainage."
},

{
q:"Which crop grows best in sandy soil?",
a:"Groundnut, watermelon and millets grow well in sandy soil."
},

{
q:"How to stop pest attack in cotton?",
a:"Use neem oil spray or recommended insecticides."
},

{
q:"Low rainfall this season, what crop should I grow?",
a:"Millets, pulses and sorghum require less water."
},

{
q:"How can I improve soil fertility?",
a:"Add compost, organic manure and rotate crops."
},

{
q:"Leaves have brown spots",
a:"This may be fungal disease. Use fungicide spray."
},

{
q:"Best fertilizer for wheat?",
a:"Use NPK fertilizer with higher nitrogen content."
}

]

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent((prev)=>(prev+1)%chats.length)

},4000)

return ()=>clearInterval(interval)

},[])

return(

<div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl h-[420px] flex flex-col">

<h2 className="text-xl font-bold text-green-400 mb-4">
🌾 Farmer Help Chat
</h2>

<div className="flex-1 flex flex-col justify-center space-y-6">

<div className="bg-gray-700 text-white p-4 rounded-xl animate-pulse">
👨‍🌾 Farmer: {chats[current].q}
</div>

<div className="bg-green-500 text-white p-4 rounded-xl ml-6">
🤖 Solution: {chats[current].a}
</div>

</div>

<p className="text-gray-400 text-sm text-center mt-4">
Showing common farming problems & solutions
</p>

</div>

)

}

export default Chatbot