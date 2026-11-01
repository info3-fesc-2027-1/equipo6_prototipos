document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos del DOM
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const eyeIcon = document.getElementById('eye-icon');
    const errorMessage = document.getElementById('error-message');
    const guestLoginBtn = document.getElementById('guest-login');

    // 2. Mostrar / Ocultar Contraseña
    if (togglePasswordBtn && passwordInput && eyeIcon) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            
            // Cambiar el icono de Font Awesome
            eyeIcon.classList.toggle('fa-eye', !isPassword);
            eyeIcon.classList.toggle('fa-eye-slash', isPassword);
        });
    }

    // 3. Manejo del Envío del Formulario (Login)
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Validación básica
            if (!email || !password) {
                showError('Por favor, completa todos los campos.');
                return;
            }

            // Simulación de autenticación exitosa
            hideError();
            console.log('Iniciando sesión con:', { email, password });
            
            alert('¡Inicio de sesión exitoso!');
            // window.location.href = 'dashboard.html';
        });
    }

    // 4. Modo Invitado
    if (guestLoginBtn) {
        guestLoginBtn.addEventListener('click', () => {
            console.log('Ingresando como invitado...');
            // window.location.href = 'servicios.html';
        });
    }

    // Funciones auxiliares para mensajes de error
    function showError(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
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