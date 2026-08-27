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
