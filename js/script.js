document.addEventListener('DOMContentLoaded', () => {
  // Vista / Modales
  const homeSection = document.getElementById('home-section');
  const dashboardSection = document.getElementById('dashboard-section');
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');

  // Botones de Apertura/Cierre de Modales
  const btnOpenLogin = document.getElementById('btn-open-login');
  const btnCloseLogin = document.getElementById('btn-close-login');
  const btnOpenRegister = document.getElementById('btn-open-register');
  const btnCloseRegister = document.getElementById('btn-close-register');
  const btnBackToLogin = document.getElementById('btn-back-to-login');
  const btnHeroBooking = document.getElementById('btn-hero-booking');
  const brandLogo = document.getElementById('brand-logo');

  // Header Usuario & Logout
  const userInfoHeader = document.getElementById('user-info-header');
  const userDisplayName = document.getElementById('user-display-name');
  const btnLogout = document.getElementById('btn-logout');

  // Formularios
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Base de datos local simulada en memoria
  let currentSessionUser = null;

  // --- NAVEGACIÓN GENERAL ---
  function showHome() {
    if (homeSection) homeSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
    closeModals();
  }

  function showDashboard() {
    if (homeSection) homeSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');
    closeModals();
  }

  function closeModals() {
    if (loginModal) loginModal.classList.add('hidden');
    if (registerModal) registerModal.classList.add('hidden');
  }

  // Modales
  if (btnOpenLogin) btnOpenLogin.addEventListener('click', () => {
    closeModals();
    loginModal.classList.remove('hidden');
  });

  if (btnCloseLogin) btnCloseLogin.addEventListener('click', closeModals);

  if (btnOpenRegister) btnOpenRegister.addEventListener('click', () => {
    closeModals();
    registerModal.classList.remove('hidden');
  });

  if (btnCloseRegister) btnCloseRegister.addEventListener('click', closeModals);
  if (btnBackToLogin) btnBackToLogin.addEventListener('click', () => {
    closeModals();
    loginModal.classList.remove('hidden');
  });

  if (btnHeroBooking) btnHeroBooking.addEventListener('click', () => {
    if (currentSessionUser) {
      showDashboard();
    } else {
      loginModal.classList.remove('hidden');
    }
  });

  if (brandLogo) brandLogo.addEventListener('click', showHome);

  // --- REGISTRO Y LOGIN ---
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();

      // Guardar usuario simulado
      currentSessionUser = { name, email };
      
      alert(`¡Cuenta creada con éxito! Bienvenido a Catarsis, ${name}.`);
      updateUserUI();
      showDashboard();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const name = email.split('@')[0];

      currentSessionUser = { name: name.toUpperCase(), email };
      
      alert(`Sesión iniciada correctamente.`);
      updateUserUI();
      showDashboard();
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      currentSessionUser = null;
      updateUserUI();
      showHome();
    });
  }

  function updateUserUI() {
    if (currentSessionUser) {
      btnOpenLogin.classList.add('hidden');
      userInfoHeader.classList.remove('hidden');
      userDisplayName.textContent = `Hola, ${currentSessionUser.name}`;
    } else {
      btnOpenLogin.classList.remove('hidden');
      userInfoHeader.classList.add('hidden');
      userDisplayName.textContent = '';
    }
  }

  // --- PESTAÑAS DEL DASHBOARD (Servicios, Productos, Cursos, Más) ---
  const dashTabs = document.querySelectorAll('.dash-tab');
  const dashContents = document.querySelectorAll('.dash-content');

  dashTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Actualizar estilo del botón activo
      dashTabs.forEach(t => {
        t.classList.remove('bg-brand-brown', 'text-brand-white');
        t.classList.add('text-stone-400');
      });
      tab.classList.add('bg-brand-brown', 'text-brand-white');
      tab.classList.remove('text-stone-400');

      // Mostrar el contenido correspondiente
      dashContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
});