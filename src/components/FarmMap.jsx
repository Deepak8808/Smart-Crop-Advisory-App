import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function FarmMap() {

  return (

    <div className="bg-white p-4 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-3">
        🛰 Farm Location Map
      </h2>

      <MapContainer
        center={[26.8467, 80.9462]}
        zoom={10}
        style={{ height: "300px", width: "100%" }}
      >

        <TileLayer
url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
/>

        <Marker position={[26.8467, 80.9462]}>
          <Popup>Your Farm Location</Popup>
        </Marker>

      </MapContainer>

    </div>

  )
}

export default FarmMap