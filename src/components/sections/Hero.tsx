export default function Hero() {
  return (
    <section className="relative min-h-[730px] flex flex-col justify-center items-center bg-cover bg-center text-white mb-20" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4 drop-shadow-xl">
          Creative Home Simplify Your <br /> Furniture
        </h1>
        <p className="text-base md:text-lg text-center mb-6 max-w-2xl text-white/80 font-light">
          Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who's the goto
        </p>
        <button
          className="mx-auto flex items-center justify-center font-bold text-lg md:text-xl text-gray-900"
          style={{
            background: 'rgba(226,226,226,0.4)',
            height: '62px',
            borderRadius: '10px',
            padding: '16px 80px',
            boxShadow: '0 4px 30px rgba(0,0,0,0.07)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            gap: '10px',
            color: '#ffffff'
          }}
        >
          Shop Now
        </button>
      </div>
      {/* Decorative Images (lamp, plant, sofa) should be absolutely positioned here if needed */}
      {/* Stats Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[92%] md:w-[80%] bg-[#2a7c7b] rounded-2xl flex flex-row justify-between items-center px-10 py-7 shadow-2xl">
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-extrabold mb-1">7</div>
          <div className="text-base md:text-lg text-white/90">Year<br />Experience</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-extrabold mb-1">2</div>
          <div className="text-base md:text-lg text-white/90">Opened<br />in the country</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-extrabold mb-1">10k+</div>
          <div className="text-base md:text-lg text-white/90">Furniture<br />sold</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-extrabold mb-1">260+</div>
          <div className="text-base md:text-lg text-white/90">Variant<br />Furniture</div>
        </div>
      </div>
    </section>
  );
}
