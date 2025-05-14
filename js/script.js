// translate
const langToggle = document.getElementById('langLabel');
let isKorean = true;

langToggle.addEventListener('click', () => {

  document.querySelectorAll('[data-ko][data-en]').forEach(el => {
    el.innerText = isKorean ? el.getAttribute('data-en') : el.getAttribute('data-ko');
  });

  langToggle.setAttribute('title', isKorean ? langToggle.getAttribute('data-en') : langToggle.getAttribute("data-ko"));
  langToggle.innerText = isKorean ? '🇺🇸' : '🇰🇷';

  isKorean = !isKorean;
});

// download
document.getElementById('downloadBtn').addEventListener('click', () => {

  window.scrollTo(0, 0);

  const element = document.querySelector('.resume-container');
  const toolbar = document.querySelector('.lang-toggle-container');

  toolbar.style.display = 'none';

  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const filename = `resume_${yyyy}${mm}${dd}_${hh}${min}${ss}.pdf`;

  setTimeout(() => {
    html2pdf()
      .set({
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: filename,
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2, useCORS: true},
        jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'},
        enableLinks: true
      })
      .from(element)
      .save()
      .then(() => {
        toolbar.style.display = 'flex';
      });
  }, 300);
});