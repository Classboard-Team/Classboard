document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle-button');

    const setTheme = (theme) => {
        const themeLink = document.getElementById('theme-style');
        themeLink.href = theme === 'light-mode' ? 'style.css' : 'dark.css';
        document.cookie = `theme=${theme}; path=/; max-age=31536000`;
        toggleButton.textContent = theme === 'light-mode' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    };

    const getThemeFromCookie = () => {
        const match = document.cookie.match(/(^| )theme=([^;]+)/);
        return match ? match[2] : 'light-mode'; // Default to light-mode
    };

    const applyStoredTheme = () => {
        const storedTheme = getThemeFromCookie();
        setTheme(storedTheme);
    };

    toggleButton.addEventListener('click', () => {
        const currentTheme = getThemeFromCookie() === 'light-mode' ? 'dark-mode' : 'light-mode';
        setTheme(currentTheme);
    });

    applyStoredTheme();
});