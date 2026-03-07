import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"

function Earth3D(){

  return(

    <div className="h-80">

      <Canvas>

        <ambientLight />

        <Sphere args={[2,32,32]}>

          <meshStandardMaterial color="green" />

        </Sphere>

        <OrbitControls />

      </Canvas>

    </div>

  )

}

export default Earth3D