import { Fragment, useEffect, useState } from 'react'

function Footer() {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.userAgentData?.platform || navigator.platform,
      vendor: navigator.vendor,
      language: navigator.language,
      languages: navigator.languages.join(', '),
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      cpuCores: navigator.hardwareConcurrency,
      deviceMemory: navigator.deviceMemory ?? 'н/д',
      screen: `${screen.width}x${screen.height}`,
      colorDepth: screen.colorDepth,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
    Object.entries(data).forEach(([key, value]) => localStorage.setItem(key, String(value)))

    const stored = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      stored[key] = localStorage.getItem(key)
    }
    setInfo(stored)
  }, [])

  return (
    <footer className="bg-slate-800 py-4 text-center text-sm text-slate-300">
      <p>&copy; 2026 Макар Чміленко. Лабораторна робота №4.</p>
      <dl className="mx-auto mt-3 grid max-w-5xl gap-x-4 gap-y-1 px-4 text-left text-xs sm:grid-cols-[auto_1fr]">
        {Object.entries(info).map(([key, value]) => (
          <Fragment key={key}>
            <dt className="font-semibold text-slate-100">{key}</dt>
            <dd className="break-all">{value}</dd>
          </Fragment>
        ))}
      </dl>
    </footer>
  )
}
export default Footer
