const musicIcon = document.getElementById('music-icon');
const soundWaves = document.querySelectorAll('.sound-wave');
const musicContainer = document.querySelector('.music-container');
const music = document.getElementById('music');




musicContainer.addEventListener('click', () => {
    if (musicContainer.classList.contains('playing')) {
        pauseMusic();
    } else {
        playMusic();
    }
});

function playMusic() {
    musicContainer.classList.add('playing');
    soundWaves.forEach((wave, index) => {
        wave.style.animation = `soundWave 1s infinite ease-in-out ${index * 0.1}s`;
    }); // Close the forEach function here
    music.play(); // Play the audio
}

function pauseMusic() {
    musicContainer.classList.remove('playing');
    soundWaves.forEach((wave) => {
        wave.style.animation = 'none';
    }); // Close the forEach function here
    music.pause(); // Pause the audio
}
