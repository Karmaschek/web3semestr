function Skills() {
  return (
    <section className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-2xl font-semibold text-blue-900 dark:text-blue-300">
        Технічні навички
      </h2>
      <ul className="space-y-3">
        <li className="rounded-lg bg-blue-50 dark:bg-slate-700 p-3 transition hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-600">
          <span className="font-semibold text-blue-700 dark:text-blue-300">Мови розробки:</span> Python, C#
        </li>
        <li className="rounded-lg bg-blue-50 dark:bg-slate-700 p-3 transition hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-600">
          <span className="font-semibold text-blue-700 dark:text-blue-300">Мережеві технології:</span> Cisco Packet Tracer, симуляція топологій, аналіз трафіку
        </li>
        <li className="rounded-lg bg-blue-50 dark:bg-slate-700 p-3 transition hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-600">
          <span className="font-semibold text-blue-700 dark:text-blue-300">Інструменти та ОС:</span> Git, Linux, Docker
        </li>
        <li className="rounded-lg bg-blue-50 dark:bg-slate-700 p-3 transition hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-600">
          <span className="font-semibold text-blue-700 dark:text-blue-300">Стандарти безпеки:</span> знання ISO/IEC 27001, принципи протидії SQL-ін'єкціям
        </li>
      </ul>
    </section>
  );
}
export default Skills;
