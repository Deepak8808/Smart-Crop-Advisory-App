import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [open,setOpen] = useState(false)

  return (

    <nav className="bg-green-700 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🌾 SmartCrop AI
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#">Dashboard</a>
          <a href="#">Weather</a>
          <a href="#">Market</a>
          <a href="#">Advisory</a>
        </div>

        <button
          className="md:hidden"
          onClick={()=>setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center pb-4 gap-4 text-lg">
          <a href="#">Dashboard</a>
          <a href="#">Weather</a>
          <a href="#">Market</a>
          <a href="#">Advisory</a>
        </div>
      )}

    </nav>

  )
}