// Selecciona el botón de modo oscuro
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "Modo Oscuro";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Estilo para el modo oscuro (puedes agregarlo en tu CSS)
const style = document.createElement("style");
style.textContent = `
    body.dark-mode {
        background-color: #333;
        color: #fff;
    }

    body.dark-mode header {
        background: #444;
    }

    body.dark-mode nav {
        background: #555;
    }
`;
document.head.appendChild(style);