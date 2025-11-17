import { Code, Palette, Sparkles, Workflow } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand & Visual Design',
    desc: 'Identity systems, design language, style guides and marketing assets with a distinctly South African flair.',
  },
  {
    icon: Code,
    title: 'Web & App Engineering',
    desc: 'Modern, fast and reliable applications built with scalable cloud-native architecture.',
  },
  {
    icon: Sparkles,
    title: 'Experience & Motion',
    desc: 'Playful interactions, micro-animations and immersive 3D that bring products to life.',
  },
  {
    icon: Workflow,
    title: 'Product Strategy',
    desc: 'Rapid discovery, prototyping and validation to move from idea to impact quickly.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-700">Full‑stack creative capabilities, from concept to code.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 p-6 hover:shadow-xl transition-all bg-white">
              <div className="w-10 h-10 rounded-full bg-violet-600/10 text-violet-700 flex items-center justify-center">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
