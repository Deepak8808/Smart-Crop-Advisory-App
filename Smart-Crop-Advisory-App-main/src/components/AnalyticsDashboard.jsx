import { motion } from "framer-motion"

function AnalyticsDashboard(){

  const stats = [
    {label:"Total Farms",value:"1,240"},
    {label:"Healthy Crops",value:"87%"},
    {label:"Disease Alerts",value:"23"},
    {label:"Yield Growth",value:"+14%"}
  ]

  return(

    <div className="grid md:grid-cols-4 gap-6">

      {stats.map((s,i)=>(

        <motion.div
          key={i}
          whileHover={{scale:1.05}}
          className="bg-green-600 text-white p-6 rounded-xl shadow-xl">

          <p className="text-sm">{s.label}</p>

          <p className="text-3xl font-bold">
            {s.value}
          </p>

        </motion.div>

      ))}

    </div>

  )

}

export default AnalyticsDashboard