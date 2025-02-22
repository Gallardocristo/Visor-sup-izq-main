// Variables para el estado actual
let CirculoActivo = "d1";

// Función para actualizar el estado en localStorage
function CambiarColor(circulo, color) {
    localStorage.setItem(circulo, color);
}

//Reinicio individual
function ReinicioIndividual(circulo) {
    localStorage.removeItem(circulo);
}

// Función para reiniciar todo
function ReiniciarColor() {
    localStorage.removeItem("d1");
    localStorage.removeItem("d2");
    CirculoActivo = "d1"; // Volver a d1 al reiniciar
    localStorage.setItem("CirculoActivo", "d1");
}

// Función para alternar la visibilidad del visor
function Mostrar() {
    const EsVisible = localStorage.getItem("Visibilidad") !== "oculto";
    localStorage.setItem("Visibilidad", EsVisible ? "oculto" : "visible");
}

// Escuchar las teclas
document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        CambiarColor(CirculoActivo, "verde");
    } else if (event.key === "-") {
        CambiarColor(CirculoActivo, "rojo");
    } else if (event.key === "1") {
        ReinicioIndividual(CirculoActivo);
    } else if (event.key === "Enter") {
        CirculoActivo = "d2";
        localStorage.setItem("CirculoActivo", "d2");
    } else if (event.key === "0") {
        ReiniciarColor();
    }
});

// Botón de On/Off
const toggleButton = document.getElementById("Boton_On/Off");
toggleButton.addEventListener("click", Mostrar);