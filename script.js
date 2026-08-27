const toast = document.querySelector('#toast');
const soundToggle = document.querySelector('#soundToggle');

soundToggle.addEventListener('click', () => {
  const isMuted = soundToggle.classList.toggle('is-muted');
  soundToggle.setAttribute('aria-pressed', String(isMuted));
  showToast(isMuted ? 'SOUND MUTED' : 'SOUND ON');
});

document.querySelectorAll('.entry-card[data-section]').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.entry-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function updateClock() {
  const now = new Date();
  document.querySelector('#clock').textContent = now.toLocaleTimeString([], { hour12: false });
}

updateClock();
window.setInterval(updateClock, 1000);
