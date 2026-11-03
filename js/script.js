document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM - Login
  const loginForm = document.getElementById('login-form');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');
  const errorMessage = document.getElementById('error-message');

  // Elementos del DOM - Navegación entre vistas
  const loginSection = document.getElementById('login-section');
  const servicesSection = document.getElementById('services-section');
  const btnGoServices = document.getElementById('btn-go-services');
  const btnBackLogin = document.getElementById('btn-back-login');
  const brandLogo = document.getElementById('brand-logo');

  // 1. Mostrar / Ocultar Contraseña
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

  // 2. Validación e inicio de sesión
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        showError('Por favor ingresa correo y contraseña.');
        return;
      }

      hideError();
      alert(`¡Bienvenido a Catarsis!\nHas iniciado sesión correctamente.`);
      // Redirige automáticamente a la sección de servicios tras iniciar sesión
      showSection(servicesSection);
    });
  }

  // 3. Lógica de cambio de secciones (Login <-> Servicios)
  function showSection(sectionToShow) {
    if (loginSection) loginSection.classList.add('hidden');
    if (servicesSection) servicesSection.classList.add('hidden');

    if (sectionToShow) {
      sectionToShow.classList.remove('hidden');
    }
  }

  if (btnGoServices) {
    btnGoServices.addEventListener('click', () => {
      showSection(servicesSection);
    });
  }

  if (btnBackLogin) {
    btnBackLogin.addEventListener('click', () => {
      showSection(loginSection);
    });
  }

  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      showSection(loginSection);
    });
  }

  // 4. Filtrado de categorías de servicios
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-brown', 'text-brand-white');
        b.classList.add('bg-stone-900', 'text-stone-400');
      });

      btn.classList.add('active', 'bg-brand-brown', 'text-brand-white');
      btn.classList.remove('bg-stone-900', 'text-stone-400');

      const category = btn.getAttribute('data-category');

      serviceCards.forEach(card => {
        if (category === 'todos' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 5. Botones de Selección de Cita
  const selectServiceBtns = document.querySelectorAll('.select-service-btn');
  selectServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      const serviceName = card ? card.querySelector('h3').textContent : 'Servicio';
      alert(`Has seleccionado: ${serviceName}.\nPróximamente agregaremos la vista del calendario.`);
    });
  });

  // Funciones de apoyo para mensajes de error
  function showError(msg) {
    if (errorMessage) {
      errorMessage.textContent = msg;
      errorMessage.classList.remove('hidden');
    }
  }

  function hideError() {
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.classList.add('hidden');
    }
  }
});