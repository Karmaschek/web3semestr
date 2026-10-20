function Projects() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-600 pb-2 text-2xl font-semibold text-blue-900">
        Проєкти та практика
      </h2>
      <article className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-700">
          Навчальні проєкти з мережевої безпеки
        </h3>
        <p className="leading-relaxed">
          Розгортання та сегментація віртуальних мереж, аудит логів доступу та конфігурація списків контролю доступу (ACL).
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Karmaschek"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 underline decoration-dotted hover:text-blue-800"
          >
            Профіль розробника
          </a>
        </p>
      </article>
    </section>
  );
}
export default Projects;
