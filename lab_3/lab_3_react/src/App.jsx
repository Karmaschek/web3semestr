import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-800">
      <Header />
      <main className="mx-auto grid w-full max-w-5xl flex-1 gap-6 px-4 py-8 md:grid-cols-3">
        <div className="flex flex-col gap-6 md:col-span-2">
          <About />
          <Education />
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
