document.addEventListener('DOMContentLoaded', () => {
  /* ===== DATOS DE SERVICIOS, PRODUCTOS Y CURSOS ===== */
  const SERV = [
    /* Cabello */
    { id: 'corte', n: 'Corte clásico', cat: 'cabello', ic: 'scissors', c: '#c5a059', p: 250, d: 40, t: 'Lavado, masaje capilar, corte a tijera o máquina y peinado con fijación profesional.', i: ['Diagnóstico de estilo', 'Lavado con masaje', 'Corte personalizado', 'Peinado y fijación'] },
    { id: 'fade', n: 'Fade / degradado', cat: 'cabello', ic: 'bars-staggered', c: '#6fb1c9', p: 280, d: 45, t: 'Degradado limpio (bajo, medio o alto) con transición suave y acabado con navaja en el contorno.', i: ['Skin, low, mid o high fade', 'Perfilado con navaja', 'Delineado de línea', 'Productos de acabado'] },
    { id: 'ninos', n: 'Corte infantil', cat: 'cabello', ic: 'child', c: '#8ac07a', p: 180, d: 30, t: 'Corte para niños hasta 12 años, con paciencia y buen humor.', i: ['Corte a tijera o máquina', 'Peinado', 'Obsequio de paleta'] },
    { id: 'tinte', n: 'Tinte y cobertura de canas', cat: 'cabello', ic: 'fill-drip', c: '#b07ad0', p: 350, d: 50, t: 'Cobertura natural de canas en cabello o barba, con tonos que se ven reales.', i: ['Prueba de tono', 'Aplicación y reposo', 'Enjuague y acondicionador', 'Peinado final'] },

    /* Barba */
    { id: 'barba', n: 'Ritual de barba', cat: 'barba', ic: 'spray-can', c: '#d9822b', p: 200, d: 30, t: 'Afeitado y diseño de barba al estilo clásico con toallas calientes y navaja libre.', i: ['Toalla caliente', 'Aceite esencial hidratante', 'Navaja libre', 'Bálsamo refrescante'] },
    { id: 'afeitado', n: 'Afeitado a navaja', cat: 'barba', ic: 'razor', c: '#e0524d', p: 220, d: 30, t: 'Afeitado completo de rostro con espuma caliente y navaja tradicional.', i: ['Pre-afeitado con aceite', 'Espuma caliente', 'Doble pasada', 'Loción after shave'] },

    /* Rostro y cera */
    { id: 'cera', n: 'Depilación con cera', cat: 'rostro', ic: 'fire-flame-simple', c: '#f0b429', p: 120, d: 15, t: 'Cera caliente de grado profesional para nariz, orejas, cejas o cuello. Rápido y con cuidado de la piel.', i: ['Nariz y orejas', 'Cejas y entrecejo', 'Línea de cuello', 'Calmante post-cera'] },
    { id: 'cejas', n: 'Perfilado de cejas', cat: 'rostro', ic: 'eye', c: '#4fd1b5', p: 90, d: 15, t: 'Diseño de cejas masculino, natural y limpio, con hilo o pinza.', i: ['Diseño según tu rostro', 'Hilo o pinza', 'Recorte', 'Gel calmante'] },
    { id: 'facial', n: 'Limpieza facial y mascarilla', cat: 'rostro', ic: 'face-smile', c: '#7a8cff', p: 260, d: 35, t: 'Exfoliación, vapor, extracción suave y mascarilla negra o de arcilla para piel con grasa e impurezas.', i: ['Vapor de ozono', 'Exfoliante', 'Mascarilla negra o arcilla', 'Hidratante'] },
    { id: 'masaje', n: 'Masaje relajante', cat: 'rostro', ic: 'hands', c: '#e88fb0', p: 150, d: 20, t: 'Masaje de cuello, hombros y cuero cabelludo para cerrar tu visita.', i: ['Cuello y hombros', 'Cuero cabelludo', 'Aceite aromático', 'Toalla caliente'] },

    /* Paquetes */
    { id: 'combo', n: 'Combo Catarsis', cat: 'combo', ic: 'crown', c: '#ffd166', p: 400, d: 75, t: 'La experiencia completa: corte, ritual de barba, perfilado de cejas y facial exprés.', i: ['Corte exclusivo', 'Ritual de barba', 'Cejas', 'Facial exprés'] },
    { id: 'novio', n: 'Paquete novio / evento', cat: 'combo', ic: 'ring', c: '#ff9f68', p: 650, d: 100, t: 'Para bodas y eventos: corte, barba, facial, cera de cejas y peinado final. Se recomienda reservar con anticipación.', i: ['Corte y barba', 'Facial completo', 'Cera y cejas', 'Fotografía de prueba'] },

    /* Productos */
    { id: 'prod-cera', n: 'Cera para cabello (120g)', cat: 'productos', ic: 'jar', c: '#eab308', p: 240, d: 0, sub: '120g · Fijación alta', t: 'Cera moldeadora de fijación alta y acabado mate natural. No deja residuos blancos y se retira fácil con agua.', i: ['Fijación flexible todo el día', 'Acabado mate sin brillo graso', 'Aroma amaderado sutil', 'Base agua de fácil lavado'] },
    { id: 'prod-polvo', n: 'Polvo de textura (20g)', cat: 'productos', ic: 'wand-magic-sparkles', c: '#22d3ee', p: 280, d: 0, sub: '20g · Volumen instantáneo', t: 'Polvo voluminizador y texturizante ligero ideal para dar cuerpo, movimiento y control en cortes modernos o crop.', i: ['Efecto volumen inmediato', 'Acabado ultra seco y natural', 'Ideal para cabello fino o lacio', 'Reactivable con las manos'] },
    { id: 'prod-shampoo', n: 'Shampoo revitalizante (300ml)', cat: 'productos', ic: 'pump-soap', c: '#34d399', p: 260, d: 0, sub: '300ml · Uso diario', t: 'Limpieza profunda con extracto de menta, romero y biotina que fortalece el folículo y refresca el cuero cabelludo.', i: ['Control de grasa y frescura', 'Con menta, romero y biotina', 'Libre de parabenos y sal', 'Apto para cabello y barba'] },
    { id: 'prod-aceite', n: 'Aceite para barba (30ml)', cat: 'productos', ic: 'droplet', c: '#f97316', p: 220, d: 0, sub: '30ml · Hidratación profunda', t: 'Mezcla de aceites de argán, jojoba y vitamina E que suaviza el vello facial, evita la picazón y aporta brillo sano.', i: ['Suaviza y doma la barba rebelde', 'Hidrata la piel debajo del vello', 'Notas de sándalo y cedro', 'Gotero dosificador de precisión'] },

    /* Cursos */
    { id: 'curso-basico', n: 'Curso básico de barbería', cat: 'cursos', ic: 'graduation-cap', c: '#38bdf8', p: 3500, d: 240, t: 'Iníciate desde cero en el arte de la barbería: manejo de herramientas, cortes clásicos y fundamentos de desvanecido.', i: ['Uso y mantenimiento de máquinas', 'Cortes clásicos a tijera y máquina', 'Introducción al fade y perfilado', 'Constancia de participación'] },
    { id: 'curso-perfeccionamiento', n: 'Curso de perfeccionamiento', cat: 'cursos', ic: 'award', c: '#a78bfa', p: 4500, d: 240, t: 'Domina técnicas avanzadas de degradado, texturizado, visagismo y ritual tradicional de barba con navaja.', i: ['Skin fade y transiciones limpias', 'Texturizado y dirección de crecimiento', 'Ritual de barba y toalla caliente', 'Práctica supervisada en modelo real'] },
    { id: 'curso-grecas', n: 'Curso de grecas y diseño', cat: 'cursos', ic: 'pen-nib', c: '#f43f5e', p: 2200, d: 180, t: 'Aprende diseño artístico (hair tattoo), simetría, líneas curvas, sombreado con patillera y acabado con navaja.', i: ['Geometría y proporción en cráneo', 'Manejo preciso de trimmer y navaja', 'Sombreados y efectos 3D', 'Diseño libre y corrección de trazos'] }
  ];

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const money = n => '$' + n + ' MXN';

  /* ===== TOAST ===== */
  function toast(m) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = m;
    t.classList.add('on');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('on'), 3500);
  }

  /* ===== RESPLANDOR DEL CURSOR + IMAGEN FLOTANTE ===== */
  document.addEventListener('mousemove', e => {
    document.body.style.setProperty('--mx', e.clientX + 'px');
    document.body.style.setProperty('--my', e.clientY + 'px');
    const p = $('#pop');
    if (p) {
      p.style.left = e.clientX + 'px';
      p.style.top = e.clientY + 'px';
    }
  });

  $$('nav a').forEach(a => {
    a.addEventListener('mouseenter', () => {
      $('#popimg').src = a.dataset.img;
      $('#pop').classList.add('on');
    });
    a.addEventListener('mouseleave', () => $('#pop').classList.remove('on'));
  });

  /* ===== TÍTULO: letras que saltan ===== */
  const heroTitle = $('#hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = [...heroTitle.textContent]
      .map(c => c === ' ' ? ' ' : '<span>' + c + '</span>')
      .join('');
  }

  /* ===== TARJETAS DE SERVICIOS, PRODUCTOS Y CURSOS ===== */
  const grid = $('#grid');
  if (grid) {
    grid.innerHTML = SERV.map(s => {
      const badge = s.cat === 'productos'
        ? `<i class="fa-solid fa-box-open"></i> ${s.sub || 'Producto'}`
        : `<i class="fa-regular fa-clock"></i> ${s.d} min`;
      const btnText = s.cat === 'cursos'
        ? '+ Agregar este curso'
        : (s.cat === 'productos' ? '+ Agregar producto' : '+ Agregar este servicio');

      return `
      <div class="card" data-cat="${s.cat}" data-id="${s.id}" style="--c:${s.c}">
        <div class="ico"><i class="fa-solid fa-${s.ic}"></i></div>
        <h3>${s.n}</h3><p>${s.t}</p>
        <div class="meta"><span class="price">${money(s.p)}</span><span class="dur">${badge}</span></div>
        <p class="hint">Toca para ver detalles</p>
        <div class="more"><ul>${s.i.map(x => `<li><i class="fa-solid fa-check"></i>${x}</li>`).join('')}</ul>
        <a href="#agendar" class="btn pick">${btnText}</a></div>
      </div>`;
    }).join('');
  }

  $$('.card').forEach(card => {
    const c = card.style.getPropertyValue('--c').trim();
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty('--cx', x + 'px');
      card.style.setProperty('--cy', y + 'px');
      card.style.transform = `perspective(700px) rotateX(${(y / r.height - .5) * -8}deg) rotateY(${(x / r.width - .5) * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseenter', () => document.body.style.setProperty('--ac', c));
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      document.body.style.setProperty('--ac', '#c5a059');
    });
    card.addEventListener('click', e => {
      if (e.target.closest('.pick')) {
        addService(card.dataset.id);
        return;
      }
      card.classList.toggle('open');
    });
  });

  $$('.tab').forEach(t => t.addEventListener('click', () => {
    $$('.tab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    $$('.card').forEach(c => c.classList.toggle('hide', t.dataset.f !== 'all' && c.dataset.cat !== t.dataset.f));
  }));

  /* ===== RESERVA Y CARRITO ACUMULATIVO ===== */
  const sel = $('#b-serv');
  const groups = [
    { label: 'Servicios', cats: ['cabello', 'barba', 'rostro', 'combo'] },
    { label: 'Productos', cats: ['productos'] },
    { label: 'Cursos', cats: ['cursos'] }
  ];
  if (sel) {
    sel.innerHTML = '<option value="" disabled selected>+ Añadir servicio, producto o curso...</option>' +
      groups.map(g => `<optgroup label="${g.label}">${
        SERV.filter(s => g.cats.includes(s.cat)).map(s => `<option value="${s.id}">${s.n} – $${s.p}</option>`).join('')
      }</optgroup>`).join('');
  }

  const HOURS = ['10:00', '11:30', '13:00', '15:00', '16:30', '18:00'];
  let hour = '';
  let cart = [];

  if ($('#slots')) {
    $('#slots').innerHTML = HOURS.map(h => `<button type="button" class="slot" data-h="${h}">${h}</button>`).join('');
  }
  const today = new Date().toISOString().slice(0, 10);
  if ($('#b-date')) $('#b-date').min = today;

  function addService(id) {
    const item = SERV.find(s => s.id === id);
    if (!item) return;
    cart.push(item);
    sel.value = '';
    document.body.style.setProperty('--ac', item.c);
    update();
    toast('Agregado al resumen: ' + item.n);
  }

  window.removeService = function(idx) {
    cart.splice(idx, 1);
    update();
  };

  $('#cart-clear')?.addEventListener('click', () => {
    cart = [];
    update();
    toast('Resumen vaciado');
  });

  function update() {
    const list = $('#s-list');
    $('#s-count').textContent = cart.length;
    $('#cart-clear').style.display = cart.length ? 'inline' : 'none';

    if (cart.length === 0) {
      list.innerHTML = '<div class="cart-empty">Aún no has agregado nada a tu resumen.</div>';
    } else {
      list.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <span>${item.n}</span>
          <small>$${item.p}</small>
          <button type="button" class="cart-del" title="Quitar" onclick="removeService(${idx})">&times;</button>
        </div>
      `).join('');
    }

    const totalDur = cart.reduce((sum, item) => sum + item.d, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.p, 0);

    $('#s-dur').textContent = totalDur > 0 ? totalDur + ' min' : 'Solo entrega / compra';
    $('#s-bar').textContent = $('#b-bar').value.replace('Cualquier barbero disponible', 'Cualquiera');
    $('#s-date').textContent = $('#b-date').value ? new Date($('#b-date').value + 'T12:00').toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' }) : '—';
    $('#s-hour').textContent = hour || '—';

    const t = $('#s-tot');
    t.textContent = '$' + totalPrice;
    t.classList.add('bump');
    setTimeout(() => t.classList.remove('bump'), 250);
  }

  sel?.addEventListener('change', () => {
    if (sel.value) addService(sel.value);
  });

  function refreshSlots() {
    const d = $('#b-date').value, seed = [...d].reduce((a, c) => a + c.charCodeAt(0), 0);
    $$('.slot').forEach((b, i) => {
      b.classList.toggle('busy', d && (seed + i) % 5 === 0);
      if (b.classList.contains('busy') && b.dataset.h === hour) {
        hour = '';
        b.classList.remove('on');
      }
    });
  }

  $$('.slot').forEach(b => b.addEventListener('click', () => {
    $$('.slot').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    hour = b.dataset.h;
    update();
  }));

  ['#b-bar', '#b-date'].forEach(i => $(i)?.addEventListener('change', () => {
    refreshSlots();
    update();
  }));

  /* ===== REGISTRO / LOGIN + LEALTAD + HISTORIAL ===== */
  let login = false;
  let currentUser = JSON.parse(localStorage.getItem('catarsis_user') || 'null');

  function saveUser() {
    if (currentUser) {
      localStorage.setItem('catarsis_user', JSON.stringify(currentUser));
    }
  }

  function renderLoyalty() {
    const stampsCount = currentUser ? (currentUser.stamps || 0) : 0;
    const modStamps = stampsCount % 6 === 0 && stampsCount > 0 ? 6 : stampsCount % 6;
    $('#loyalty-count').textContent = `${modStamps} / 6`;

    const gridStamps = $('#stamps-grid');
    gridStamps.innerHTML = Array.from({ length: 6 }, (_, i) => {
      const filled = i < modStamps;
      return `<div class="stamp ${filled ? 'filled' : ''}" title="Sello ${i + 1}">
        <i class="fa-solid ${i === 5 ? 'fa-crown' : 'fa-scissors'}"></i>
      </div>`;
    }).join('');

    if (modStamps === 6) {
      $('#loyalty-msg').innerHTML = '🎉 <b>¡Felicidades!</b> Tienes un corte clásico de cortesía disponible.';
    } else {
      const left = 6 - modStamps;
      $('#loyalty-msg').textContent = `Te faltan ${left} ${left === 1 ? 'cita' : 'citas'} para tu corte gratis.`;
    }
  }

  function renderHistory() {
    const history = (currentUser && currentUser.history) ? currentUser.history : [];
    $('#hist-total-count').textContent = history.length;
    const list = $('#history-list');

    if (history.length === 0) {
      list.innerHTML = '<div class="hist-empty">Aún no tienes citas o pedidos registrados.</div>';
      return;
    }

    list.innerHTML = history.map((h, idx) => `
      <div class="hist-item">
        <div class="hist-top">
          <span>${h.dateText} · ${h.hour}</span>
          <span>$${h.total}</span>
        </div>
        <div class="hist-desc">${h.items.map(x => x.n).join(', ')}</div>
        <div class="hist-actions">
          <button type="button" class="hist-btn" onclick="repeatOrder(${idx})">↻ Volver a pedir</button>
          <button type="button" class="hist-btn cancel" onclick="cancelOrder(${idx})">✕ Cancelar</button>
        </div>
      </div>
    `).join('');
  }

  window.repeatOrder = function(idx) {
    if (!currentUser || !currentUser.history[idx]) return;
    const order = currentUser.history[idx];
    cart = [...order.items];
    update();
    $('#agendar').scrollIntoView({ behavior: 'smooth' });
    toast('Pedido cargado nuevamente en tu resumen');
  };

  window.cancelOrder = function(idx) {
    if (!currentUser || !currentUser.history[idx]) return;
    currentUser.history.splice(idx, 1);
    if (currentUser.stamps > 0) currentUser.stamps--;
    saveUser();
    renderLoyalty();
    renderHistory();
    toast('Cita cancelada y eliminada de tu historial');
  };

  function renderAuthState() {
    const formView = $('#auth-form-view');
    const doneView = $('#auth-done-view');
    const headerUser = $('#header-user');

    if (currentUser) {
      formView.style.display = 'none';
      doneView.classList.add('on');
      $('#done-title').textContent = currentUser.isNew ? '¡REGISTRO COMPLETADO!' : '¡SESIÓN INICIADA!';
      $('#done-sub').textContent = `Bienvenido a Catarsis Barbería, ${currentUser.firstName}`;
      $('#done-name').textContent = currentUser.fullName;
      $('#done-mail').textContent = currentUser.email;
      $('#done-barber').textContent = currentUser.barber || 'Cualquiera';

      headerUser.classList.add('on');
      $('#header-username').textContent = currentUser.firstName;

      $('#b-name').value = currentUser.fullName;
      if (currentUser.barber) {
        $('#b-bar').value = currentUser.barber;
        update();
      }

      renderLoyalty();
      renderHistory();
    } else {
      formView.style.display = 'block';
      doneView.classList.remove('on');
      headerUser.classList.remove('on');
      $('#auth-form').reset();
      $('#bar').style.width = '0%';
    }
  }

  function logoutUser() {
    currentUser = null;
    localStorage.removeItem('catarsis_user');
    renderAuthState();
    toast('Sesión cerrada correctamente');
  }

  $('#swap')?.addEventListener('click', e => {
    if (!e.target.id) return;
    login = !login;
    $('#auth-title').textContent = login ? 'INICIAR SESIÓN' : 'CREAR CUENTA';
    $('#auth-sub').textContent = login ? 'Inicia sesión para ver tus sellos e historial' : 'Regístrate para acumular sellos y guardar tu historial';
    $('#f-name').style.display = login ? 'none' : 'block';
    $('#f-barber').style.display = login ? 'none' : 'block';
    $('#r-name').required = !login;
    $('#auth-btn').textContent = login ? 'Entrar' : 'Registrarme';
    $('#forgot-btn').style.display = login ? 'inline-block' : 'none';
    $('#cat-link').style.display = login ? 'none' : 'inline-block';
    $('#swap').innerHTML = login ? '¿Aún no tienes cuenta? <a id="swap-a">Regístrate</a>' : '¿Ya tienes cuenta? <a id="swap-a">Inicia sesión</a>';
  });

  $('#toggle-pass')?.addEventListener('click', () => {
    const inp = $('#r-pass');
    const icon = $('#toggle-pass i');
    const isPass = inp.type === 'password';
    inp.type = isPass ? 'text' : 'password';
    icon.className = isPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
  });

  $('#forgot-btn')?.addEventListener('click', () => {
    const mail = $('#r-mail').value.trim();
    if (!mail) {
      toast('Escribe tu correo electrónico arriba para enviarte el enlace');
      $('#r-mail').focus();
      return;
    }
    toast(`Te enviamos un enlace de recuperación a ${mail}`);
  });

  $('#r-pass')?.addEventListener('input', e => {
    const v = e.target.value;
    let sc = 0;
    if (v.length >= 6) sc++;
    if (/[A-Z]/.test(v)) sc++;
    if (/\d/.test(v)) sc++;
    if (/\W/.test(v)) sc++;
    const b = $('#bar');
    b.style.width = (sc * 25) + '%';
    b.style.background = ['#e0524d', '#e0524d', '#f0b429', '#8ac07a', '#4fd1b5'][sc];
  });

  $('#auth-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const mail = $('#r-mail').value.trim();
    const rawName = $('#r-name').value.trim();
    const barber = $('#r-barber').value;
    const fullName = login ? (rawName || mail.split('@')[0]) : rawName;
    const firstName = fullName.split(' ')[0];

    currentUser = {
      fullName,
      firstName,
      email: mail,
      barber,
      isNew: !login,
      stamps: login ? 2 : 0,
      history: []
    };

    saveUser();
    $('#auth-form').reset();
    $('#bar').style.width = '0%';
    renderAuthState();
    toast(login ? `¡Bienvenido de nuevo, ${firstName}!` : `¡Registro completado, ${firstName}!`);
  });

  $('#header-logout')?.addEventListener('click', logoutUser);
  $('#card-logout')?.addEventListener('click', logoutUser);

  $('#booking')?.addEventListener('submit', e => {
    e.preventDefault();
    if (cart.length === 0) {
      toast('Agrega al menos un servicio, producto o curso');
      return;
    }
    if (!hour) {
      toast('Elige un horario para continuar');
      return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.p, 0);
    const dateText = $('#s-date').textContent;

    if (currentUser) {
      currentUser.history = currentUser.history || [];
      currentUser.history.unshift({
        dateText,
        hour,
        total: totalPrice,
        items: [...cart]
      });
      currentUser.stamps = (currentUser.stamps || 0) + 1;
      saveUser();
      renderLoyalty();
      renderHistory();
      toast('¡Cita confirmada! Ganaste +1 sello en tu Tarjeta Catarsis');
    } else {
      toast(`¡Pedido confirmado (${cart.length} artículos/servicios)! Te esperamos el ${dateText} a las ${hour}`);
    }

    confetti();
  });

  renderAuthState();

  /* ===== TARJETA GLASSMORPHISM: INCLINACIÓN 3D + BRILLO AL CURSOR ===== */
  const glass = $('#auth');
  if (glass) {
    glass.addEventListener('mousemove', e => {
      const r = glass.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      glass.style.setProperty('--gx', x + 'px');
      glass.style.setProperty('--gy', y + 'px');
      const rx = ((y / r.height) - .5) * -8;
      const ry = ((x / r.width) - .5) * 8;
      glass.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    glass.addEventListener('mouseleave', () => {
      glass.style.transform = '';
    });
  }

  /* ===== BOTONES: magnético + onda al hacer clic ===== */
  $$('.btn,.tab,.btn-dark').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .25}px)`;
    });
    b.addEventListener('mouseleave', () => b.style.transform = '');
    b.addEventListener('click', e => {
      const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), sp = document.createElement('span');
      sp.className = 'rip';
      sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      b.appendChild(sp);
      setTimeout(() => sp.remove(), 600);
    });
  });

  /* ===== PANELES DE RESERVA: inclinación 3D ===== */
  $$('.panel:not(.sum)').forEach(p => {
    p.addEventListener('mousemove', e => {
      const r = p.getBoundingClientRect();
      p.style.transform = `perspective(900px) rotateX(${((e.clientY - r.top) / r.height - .5) * -4}deg) rotateY(${((e.clientX - r.left) / r.width - .5) * 4}deg)`;
    });
    p.addEventListener('mouseleave', () => p.style.transform = '');
  });

  /* ===== APARICIÓN AL HACER SCROLL ===== */
  const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: .15 });
  $$('.reveal').forEach(r => io.observe(r));

  /* ===== CONFETI AL CONFIRMAR ===== */
  function confetti() {
    const cols = ['#c5a059', '#8b5a2b', '#f5f1ea', '#ffd166'];
    for (let i = 0; i < 60; i++) {
      const d = document.createElement('i');
      d.style.cssText = `position:fixed;left:50%;top:60%;width:8px;height:12px;background:${cols[i % 4]};z-index:200;pointer-events:none;border-radius:2px`;
      document.body.appendChild(d);
      const a = Math.random() * Math.PI * 2, v = 150 + Math.random() * 350;
      d.animate([
        { transform: 'translate(0,0) rotate(0)', opacity: 1 },
        { transform: `translate(${Math.cos(a) * v}px,${Math.sin(a) * v + 300}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], { duration: 1400, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => d.remove();
    }
  }
});