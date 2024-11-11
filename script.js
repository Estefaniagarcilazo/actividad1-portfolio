// Selecciona el botón y el cuerpo del documento
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Alterna entre los modos oscuro y claro
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
});
