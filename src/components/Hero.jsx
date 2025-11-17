import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Impact-driven digital products, built with playful precision.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Impact Fusion Labs partners with South African brands to design and engineer vibrant interfaces, immersive experiences, and scalable platforms.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-violet-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-violet-700 transition-colors">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-black/10 text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-white transition-colors">
                See our work
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
    </section>
  )
}
