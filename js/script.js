// ====== TRAFFIC LIGHT CONTROL ======
const lights = document.querySelectorAll('.light');
const changeBtn = document.getElementById('changeLightBtn');

let currentIndex = 0;

if (changeBtn) {
  changeBtn.addEventListener('click', () => {
    lights.forEach(light => light.classList.remove('active'));
    lights[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % lights.length;
  });
}

// ====== CONTACT FORM MESSAGE ======
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = "✅ Message sent successfully!";
    contactForm.reset();
  });
}
