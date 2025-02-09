// 🛠 Cambiar aquí la fecha para hacer pruebas fácilmente
const targetDate = new Date(new Date().getFullYear(), 1, 14, 0, 0, 0);

function updateTimer() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        // 🟢 Cuando llega a 0, cambia el mensaje y muestra el botón
        document.getElementById("timer").innerHTML = "🎉 Sorpresa lista 🎉";
        document.getElementById("surprise-btn").style.display = "block"; // Mostrar botón
        return;
    }

    // Convertir el tiempo restante en días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar en el HTML con cada unidad en su línea
    document.getElementById("timer").innerHTML = `
        <div class="time-box">${days}<span>Días</span></div>
        <div class="time-box">${hours}<span>Horas</span></div>
        <div class="time-box">${minutes}<span>Minutos</span></div>
        <div class="time-box">${seconds}<span>Segundos</span></div>
    `;
}

// Actualizar cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// Función para ir a la página de la sorpresa
function goToMainPage() {
    window.location.href = "main.html"; // Cambia esto por la página de destino
}
