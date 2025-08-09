const toggle = document.getElementById('theme-switch');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');

const setTheme = (mode) => {
    root.setAttribute('data-theme', mode);
localStorage.setItem('theme', mode);
toggle.checked = (mode === 'dark');
};

toggle.addEventListener('change', () => {
    setTheme(toggle.checked ? 'dark' : 'light');
});

if (storedTheme) {
    setTheme(storedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDark ? 'dark' : 'light');
}

// Mobile menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});


