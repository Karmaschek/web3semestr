import { useEffect, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/xrpqgqqr'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('feedbackShown')) return
    const timer = setTimeout(() => setIsOpen(true), 60000) // 1 хвилина
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setIsOpen(false)
    sessionStorage.setItem('feedbackShown', '1')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('Надсилання…')
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setStatus('Дякуємо! Повідомлення надіслано.')
      form.reset()
      setTimeout(close, 2000)
    } catch (err) {
      setStatus('Помилка надсилання: ' + err.message)
    }
  }

  const field =
    'mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal dark:border-slate-600 dark:bg-slate-900'

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-slate-800">
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-2 text-2xl hover:text-blue-600"
            aria-label="Закрити"
          >
            ×
          </button>
          <h2 className="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-300">
            Зворотний зв'язок
          </h2>
          <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} className="space-y-3">
            <label className="block font-semibold">
              Ім'я
              <input type="text" name="name" required className={field} />
            </label>
            <label className="block font-semibold">
              Email
              <input type="email" name="email" required className={field} />
            </label>
            <label className="block font-semibold">
              Номер телефону
              <input type="tel" name="phone" required pattern="[+0-9\s()\-]{10,}" className={field} />
            </label>
            <label className="block font-semibold">
              Повідомлення
              <textarea name="message" rows="4" required className={field} />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              Надіслати
            </button>
            <p role="status" className="text-sm">{status}</p>
          </form>
          <button
            type="button"
            onClick={close}
            className="mt-3 w-full rounded-lg border border-slate-300 py-2 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
          >
            Закрити
          </button>
        </div>
      </div>
    )
  )
}
export default ContactForm
