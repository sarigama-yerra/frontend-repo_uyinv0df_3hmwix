import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech Platform', tag: 'Web App', color: 'from-fuchsia-500 to-violet-600' },
  { title: 'Edu AR Experience', tag: '3D & Motion', color: 'from-amber-400 to-pink-500' },
  { title: 'E‑commerce Suite', tag: 'Product', color: 'from-sky-500 to-cyan-400' },
]

export default function Work() {
  return (
    <section id="work" className="py-16 sm:py-24 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
            <p className="mt-3 text-gray-700">A snapshot of platforms and experiences we’ve crafted.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black">Work with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border border-black/10 p-6 bg-gradient-to-br ${p.color} text-white shadow-lg`}
            >
              <span className="text-xs uppercase tracking-wide/loose opacity-90">{p.tag}</span>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
