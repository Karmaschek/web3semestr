import { useEffect, useState } from 'react'

const VARIANT = 24 // номер у журналі

function Reviews() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then(setComments)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-2xl font-semibold text-blue-900 dark:text-blue-300">
        Відгуки колишніх роботодавців
      </h2>
      {loading && <p>Завантаження…</p>}
      {error && <p className="text-red-500">Не вдалося завантажити відгуки: {error}</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {comments.map((c) => (
          <article key={c.id} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h3 className="font-semibold capitalize text-blue-700 dark:text-blue-300">{c.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{c.email}</p>
            <p className="mt-2">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export default Reviews
