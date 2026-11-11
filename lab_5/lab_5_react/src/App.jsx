import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Reviews from './components/Reviews.jsx'
import Skills from './components/Skills.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

// день: 07:00–21:00, у решту часу ніч
const themeByTime = () => {
  const hour = new Date().getHours()
  return hour >= 7 && hour < 21 ? 'light' : 'dark'
}

function App() {
  // Завантажуємо тему з localStorage або використовуємо автоматичний режим за часом
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved : themeByTime()
  })

  // Стан для керування модальним вікном зворотного зв'язку
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Автоперемикання за часом при завантаженні + перевірка щохвилини
  // (тільки якщо тема не була вручну змінена)
  const [manualOverride, setManualOverride] = useState(() => !!localStorage.getItem('theme'))
  useEffect(() => {
    if (manualOverride) return
    let autoTheme = themeByTime()
    setTheme(autoTheme)
    const timer = setInterval(() => {
      const current = themeByTime()
      if (current !== autoTheme) {
        autoTheme = current
        setTheme(current)
      }
    }, 60000)
    return () => clearInterval(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Зберігаємо тему в localStorage при зміні
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  // клас dark на <html> для Tailwind
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Перемикання теми з збереженням у localStorage
  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    setManualOverride(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />
      <main className="mx-auto grid w-full max-w-5xl flex-1 gap-6 px-4 py-8 md:grid-cols-3">
        <div className="flex flex-col gap-6 md:col-span-2">
          <About />
          <Education />
          <Projects />
          <Reviews />
        </div>
        <div>
          <Skills />
        </div>
      </main>
      <ContactForm isOpen={isContactOpen} onClose={setIsContactOpen} />
      <Footer />
    </div>
  )
}

export default App
