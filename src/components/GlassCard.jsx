function GlassCard({title,children}){

  return(

    <div className="backdrop-blur-lg bg-white/20 border border-white/30
    p-6 rounded-2xl shadow-xl">

      <h2 className="text-xl font-bold mb-4 text-white">
        {title}
      </h2>

      {children}

    </div>

  )

}

export default GlassCard