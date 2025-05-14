const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
let isKorean = true;

langToggle.addEventListener('change', () => {
  document.querySelectorAll('[data-ko][data-en]').forEach(el => {
    el.innerText = isKorean ? el.getAttribute('data-en') : el.getAttribute('data-ko');
  });
  langLabel.innerText = isKorean ? '🇺🇸' : '🇰🇷';
  isKorean = !isKorean;
});