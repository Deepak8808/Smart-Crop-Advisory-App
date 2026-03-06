import { useEffect, useState } from "react"

function MarketPrices(){

  const [prices,setPrices] = useState([])

  useEffect(()=>{

    setPrices([
      {crop:"Wheat",price:"₹2200"},
      {crop:"Rice",price:"₹2100"},
      {crop:"Maize",price:"₹1800"},
      {crop:"Cotton",price:"₹6500"}
    ])

  },[])

  return(

    <div className="bg-green-600 text-white p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-3">
        📈 Market Prices
      </h2>

      {prices.map((p,i)=>(

        <p key={i}>
          {p.crop} : {p.price}/quintal
        </p>

      ))}

    </div>

  )
}

export default MarketPrices