import { useEffect, useState } from "react"

function WeatherCard() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Lucknow&units=metric&appid=e62a626f962bc0401a096a8b389b6e0b")

      .then(res => res.json())
      .then(data => setWeather(data))

  }, [])

  if (!weather) return <div className="p-6 bg-white rounded-xl shadow">Loading weather...</div>

  return (

    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-3">
        🌦 Live Weather
      </h2>

      <p>Temperature : {weather.main.temp} °C</p>

      <p>Humidity : {weather.main.humidity}%</p>

      <p>Condition : {weather.weather[0].main}</p>
    </div>

  )
}

export default WeatherCard