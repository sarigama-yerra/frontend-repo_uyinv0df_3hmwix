import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Impact Fusion Labs • South Africa</p>
          <p>Built with care and playful precision.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
