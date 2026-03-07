import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useState, useEffect } from "react";

function FarmMap() {
  const[position, setposition] = useState([28.6139, 77.2090]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
           const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setPosition([lat, lon]);
    });
  }, []);
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
        attribution="&copy; OpenStreetMap"
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