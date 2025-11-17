import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something impactful</h2>
          <p className="mt-3 text-gray-700">Tell us about your challenge and we’ll get back to you within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email address" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company (optional)" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, timeline and goals" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />

          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-full bg-violet-600 text-white px-6 py-3 text-sm font-semibold hover:bg-violet-700">
              {status?.loading ? 'Sending…' : 'Send message'}
            </button>
            {status?.ok === true && (
              <p className="text-sm text-green-600">Thanks! We’ll be in touch shortly.</p>
            )}
            {status?.ok === false && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
