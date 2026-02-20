import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio-player');
  const playBtn = document.getElementById('play-btn');
  const playIcon = playBtn.querySelector('span');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playIcon.textContent = 'pause';
    } else {
      audio.pause();
      playIcon.textContent = 'play_arrow';
    }
  });

  // Reset icon when audio ends
  audio.addEventListener('ended', () => {
    playIcon.textContent = 'play_arrow';
  });
});
