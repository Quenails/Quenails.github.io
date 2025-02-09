window.addEventListener('DOMContentLoaded', () => {
    // Crear el HTML dinámicamente
    const audioPlayerHTML = `
        <audio id="backgroundAudio" loop>
            <source src="musica.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>

        <div class="player-container">
            <button class="play-button" onclick="togglePlay()">▶️</button>
            <span id="volumeIcon" class="volume-icon">🔉</span>
            <input type="range" id="volumeSlider" min="0" max="100" value="50" oninput="updateVolume()">
        </div>
    `;

    // Insertar el reproductor en el body
    document.body.insertAdjacentHTML('beforeend', audioPlayerHTML);

    // Llamar a la función para configurar la música
    setupAudioPlayer();
});

function setupAudioPlayer() {
    const audio = document.getElementById("backgroundAudio");
    const volumeSlider = document.getElementById("volumeSlider");
    const volumeIcon = document.getElementById("volumeIcon");
    const playButton = document.querySelector(".play-button");

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "⏸";
        } else {
            audio.pause();
            playButton.textContent = "▶️";
        }
    }

    function updateVolume() {
        const volume = volumeSlider.value / 100;
        audio.volume = volume;

        if (volume == 0) {
            volumeIcon.textContent = "🔇";
        } else if (volume < 0.3) {
            volumeIcon.textContent = "🔈";
        } else if (volume < 0.7) {
            volumeIcon.textContent = "🔉";
        } else {
            volumeIcon.textContent = "🔊";
        }
    }

    // Agregar las funciones al botón de reproducción y slider
    window.togglePlay = togglePlay;
    window.updateVolume = updateVolume;
}
