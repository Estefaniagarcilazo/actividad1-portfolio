// Selecciona el botón y el cuerpo del documento
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Al cargar la página, aplica el modo almacenado
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Si no hay tema almacenado, usa el modo oscuro por defecto
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Alterna entre los modos oscuro y claro
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Guarda el modo oscuro
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode'); // Guarda el modo claro
    }
});
