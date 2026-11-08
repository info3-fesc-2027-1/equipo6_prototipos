document.addEventListener('DOMContentLoaded', () => {
  // Secciones Principales
  const homeSection = document.getElementById('home-section');
  const servicesSection = document.getElementById('services-section');
  const loginModal = document.getElementById('login-modal');

  // Botones para abrir/cerrar el Modal de Login
  const btnOpenLogin = document.getElementById('btn-open-login');
  const btnCloseLogin = document.getElementById('btn-close-login');

  // Botones de Navegación de la Landing
  const btnHeroBooking = document.getElementById('btn-hero-booking');
  const btnViewAllServices = document.getElementById('btn-view-all-services');
  const btnBackHome = document.getElementById('btn-back-home');
  const brandLogo = document.getElementById('brand-logo');

  // Formulario de Login
  const loginForm = document.getElementById('login-form');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  // Funciones de control de vista
  function showHome() {
    if (homeSection) homeSection.classList.remove('hidden');
    if (servicesSection) servicesSection.classList.add('hidden');
    if (loginModal) loginModal.classList.add('hidden');
  }

  function showServices() {
    if (homeSection) homeSection.classList.add('hidden');
    if (servicesSection) servicesSection.classList.remove('hidden');
    if (loginModal) loginModal.classList.add('hidden');
  }

  function openLoginModal() {
    if (loginModal) loginModal.classList.remove('hidden');
  }

  function closeLoginModal() {
    if (loginModal) loginModal.classList.add('hidden');
  }

  // Asignación de Eventos
  if (btnOpenLogin) btnOpenLogin.addEventListener('click', openLoginModal);
  if (btnCloseLogin) btnCloseLogin.addEventListener('click', closeLoginModal);
  
  if (btnHeroBooking) btnHeroBooking.addEventListener('click', showServices);
  if (btnViewAllServices) btnViewAllServices.addEventListener('click', showServices);
  if (btnBackHome) btnBackHome.addEventListener('click', showHome);
  if (brandLogo) brandLogo.addEventListener('click', showHome);

  // Ver/Ocultar contraseña
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      if (eyeIcon) {
        eyeIcon.classList.toggle('fa-eye', !isPassword);
        eyeIcon.classList.toggle('fa-eye-slash', isPassword);
      }
    });
  }

  // Formulario de Inicio de Sesión
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Bienvenido a Catarsis Barbería!');
      closeLoginModal();
      showServices();
    });
  }
});