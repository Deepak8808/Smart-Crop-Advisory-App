import Particles from "react-tsparticles"

function ParticlesBackground() {

  return (

    <Particles
      options={{
        background:{color:"#0f172a"},
        particles:{
          number:{value:60},
          size:{value:3},
          move:{speed:1},
          color:{value:"#22c55e"}
        }
      }}

      className="absolute top-0 left-0 w-full h-full -z-10"
    />

  )

}

export default ParticlesBackground