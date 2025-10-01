// Love Falling Pink 💗
function createLove() {
  const love = document.createElement('div');
  love.classList.add('love');
  love.innerHTML = '💗';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.fontSize = (15 + Math.random() * 25) + 'px';
  love.style.animationDuration = (3 + Math.random() * 5) + 's';
  document.body.appendChild(love);
  setTimeout(() => love.remove(), 8000);
}
setInterval(createLove, 500);

// Musik
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
music.volume = 0.7;

// unmute saat interaksi
document.addEventListener("click", () => {
  music.muted = false;
  music.play();
}, { once: true });

// toggle play/pause
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🫶🏻";
  } else {
    music.pause();
    toggleBtn.textContent = "🫶🏻";
  }
});
