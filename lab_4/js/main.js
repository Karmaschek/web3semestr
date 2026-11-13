/* ============ 1. Інформація про ОС і браузер -> localStorage -> футер ============ */
function saveSystemInfo() {
    const nav = navigator;
    const info = {
        userAgent: nav.userAgent,
        platform: nav.userAgentData?.platform || nav.platform,
        vendor: nav.vendor,
        language: nav.language,
        languages: nav.languages.join(', '),
        cookieEnabled: nav.cookieEnabled,
        onLine: nav.onLine,
        cpuCores: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory ?? 'н/д',
        screen: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    for (const [key, value] of Object.entries(info)) {
        localStorage.setItem(key, String(value));
    }
}

function showLocalStorage() {
    const list = document.getElementById('sysinfo');
    list.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = key;
        dd.textContent = localStorage.getItem(key);
        list.append(dt, dd);
    }
}

/* ============ 2. Відгуки з JSONPlaceholder ============ */
const VARIANT = 24; // номер у журналі

async function loadReviews() {
    const status = document.getElementById('reviews-status');
    const list = document.getElementById('reviews-list');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const comments = await response.json();

        comments.forEach(c => {
            const card = document.createElement('article');
            card.className = 'review';

            const name = document.createElement('h3');
            name.textContent = c.name;
            const email = document.createElement('p');
            email.className = 'review__email';
            email.textContent = c.email;
            const body = document.createElement('p');
            body.textContent = c.body;

            card.append(name, email, body);
            list.append(card);
        });
        status.remove();
    } catch (error) {
        status.textContent = 'Не вдалося завантажити відгуки: ' + error.message;
    }
}

/* ============ 3. Модальне вікно з формою ============ */
const modal = document.getElementById('modal');
const form = document.getElementById('feedback-form');
const formStatus = document.getElementById('form-status');

function openModal() {
    modal.hidden = false;
}

function closeModal() {
    modal.hidden = true;
    sessionStorage.setItem('feedbackShown', '1'); // у цій сесії більше не показувати
}

function initModal() {
    if (!sessionStorage.getItem('feedbackShown')) {
        setTimeout(openModal, 60000); // 1 хвилина
    }
    document.getElementById('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

    form.addEventListener('submit', async e => {
        e.preventDefault();
        formStatus.textContent = 'Надсилання…';
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            formStatus.textContent = 'Дякуємо! Повідомлення надіслано.';
            form.reset();
            setTimeout(closeModal, 2000);
        } catch (error) {
            formStatus.textContent = 'Помилка надсилання: ' + error.message;
        }
    });
}

/* ============ 4. Денна / нічна тема ============ */
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeBtn.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function themeByTime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark'; // день 07:00–21:00
}

function initTheme() {
    let autoTheme = themeByTime();
    applyTheme(autoTheme);

    // перевірка раз на хвилину: коли настає інша пора доби, тема міняється сама
    setInterval(() => {
        const current = themeByTime();
        if (current !== autoTheme) {
            autoTheme = current;
            applyTheme(current);
        }
    }, 60000);

    themeBtn.addEventListener('click', () => {
        applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
}

/* ============ Запуск ============ */
saveSystemInfo();
showLocalStorage();
loadReviews();
initModal();
initTheme();
