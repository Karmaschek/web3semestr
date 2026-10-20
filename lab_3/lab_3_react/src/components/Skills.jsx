function Skills() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-2xl font-semibold text-blue-900">
        Технічні навички
      </h2>
      <ul className="space-y-3">
        <li className="rounded-lg bg-blue-50 p-3 transition hover:scale-105 hover:bg-blue-100">
          <span className="font-semibold text-blue-700">Мови розробки:</span> Python, C#
        </li>
        <li className="rounded-lg bg-blue-50 p-3 transition hover:scale-105 hover:bg-blue-100">
          <span className="font-semibold text-blue-700">Мережеві технології:</span> Cisco Packet Tracer, симуляція топологій, аналіз трафіку
        </li>
        <li className="rounded-lg bg-blue-50 p-3 transition hover:scale-105 hover:bg-blue-100">
          <span className="font-semibold text-blue-700">Інструменти та ОС:</span> Git, Linux, Docker
        </li>
        <li className="rounded-lg bg-blue-50 p-3 transition hover:scale-105 hover:bg-blue-100">
          <span className="font-semibold text-blue-700">Стандарти безпеки:</span> знання ISO/IEC 27001, принципи протидії SQL-ін'єкціям
        </li>
      </ul>
    </section>
  );
}
export default Skills;
