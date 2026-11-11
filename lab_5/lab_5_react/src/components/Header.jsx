// Header приймає onOpenContact для відкриття модального вікна зворотного зв'язку
function Header({ theme, onToggleTheme, onOpenContact }) {
  return (
    <header className="bg-linear-to-br from-blue-900 to-blue-600 text-white shadow-lg dark:from-slate-900 dark:to-blue-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-wide">Макар Чміленко</h1>
          <p className="mt-1 text-lg uppercase tracking-widest opacity-90">
            Спеціальність: Кібербезпека
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <p>
            Контакти:{' '}
            <a
              href="mailto:makkar9955@gmail.com"
              className="font-semibold underline decoration-dotted hover:text-amber-300"
            >
              makkar9955@gmail.com
            </a>
          </p>
          <p>Місто: Львів</p>
          <div className="flex gap-2 mt-2">
            {/* Кнопка зміни теми */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-full border border-white/60 px-4 py-1 transition hover:bg-white/20"
              aria-label="Змінити тему"
            >
              {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
            </button>
            {/* Кнопка відкриття модального вікна зворотного зв'язку */}
            <button
              type="button"
              onClick={onOpenContact}
              className="rounded-full border border-white/60 px-4 py-1 transition hover:bg-white/20"
              aria-label="Зворотний зв'язок"
            >
              ✉️ Зворотний зв'язок
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
