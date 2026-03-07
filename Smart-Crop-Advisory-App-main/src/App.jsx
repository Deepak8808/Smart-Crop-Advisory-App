import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import ParticlesBackground from "./components/ParticlesBackground"

function App(){

  return(

    <div className="min-h-screen bg-slate-900 text-white">

      <ParticlesBackground/>

      <Navbar/>

      <Dashboard/>

    </div>

  )

}

export default App