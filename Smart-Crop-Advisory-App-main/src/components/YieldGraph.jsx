import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
 { month:"Jan", yield:20 },
 { month:"Feb", yield:28 },
 { month:"Mar", yield:35 },
 { month:"Apr", yield:42 },
 { month:"May", yield:50 },
 { month:"Jun", yield:60 },
 { month:"Jul", yield:72 },
 { month:"Aug", yield:85 },
]

function YieldGraph(){

return(

<div className="bg-slate-900 p-6 rounded-2xl shadow-xl">

<h2 className="text-xl font-bold text-green-400 mb-4">
📊 AI Crop Yield Prediction
</h2>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="yield"
stroke="#22c55e"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

<p className="text-gray-400 text-sm mt-3">
AI estimated crop production trend for the current season.
</p>

</div>

)

}

export default YieldGraph