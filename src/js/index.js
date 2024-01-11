const btn = document.querySelector('button');
const base = document.querySelector('html');

let theme = ''

btn.onclick = () => {
    theme = base.getAttribute('data-theme')
    base.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    // if (base.classList.contains('dark-theme')) {
    //     btn.textContent = 'Light Mode';
    // } else {
    //     btn.textContent = 'Dark Mode';
    // }
}