/* =====================================================
   BICIS CHINAS PRO — script.js
   Módulos: initNav, initImageSwitchers, initCategoryFilter, initUtils
   ===================================================== */

/* -------------------------------------------------------
   1. NAVEGACIÓN (hamburguesa + scroll + active link)
   ------------------------------------------------------- */
function initNav() {
  var header     = document.querySelector('.site-header');
  var hamburger  = document.querySelector('.nav__hamburger');
  var mobileMenu = document.querySelector('.nav__mobile-menu');

  if (!hamburger || !mobileMenu) return;

  // Toggle menú móvil
  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Cerrar al hacer clic en cualquier enlace del menú móvil
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Clase nav--scrolled al hacer scroll
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // Marcar enlace activo según la página actual
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile-menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var linkFile = href.split('/').pop().split('?')[0].split('#')[0];
    var isCatalogo = currentPath === 'catalogo.html' && linkFile === 'catalogo.html';
    var isHome = (currentPath === '' || currentPath === 'index.html') && (linkFile === '' || linkFile === 'index.html');
    if (isCatalogo || isHome) {
      link.classList.add('active');
    }
  });
}

/* -------------------------------------------------------
   2. SWITCHER DE IMÁGENES EN TARJETAS DE PRODUCTO
   ------------------------------------------------------- */
function initImageSwitchers() {
  document.querySelectorAll('.product-card').forEach(function (card) {
    var mainImg  = card.querySelector('.card__main-img');
    var thumbs   = card.querySelectorAll('.thumb');

    if (!mainImg || thumbs.length === 0) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', switchImage);
      thumb.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          switchImage.call(thumb);
        }
      });
    });

    function switchImage() {
      var thumb  = this;
      var newSrc = thumb.dataset.src;
      if (!newSrc || mainImg.src.endsWith(newSrc)) return;

      // Marcar thumbnail activo inmediatamente
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');

      // Fade out → swap src → fade in
      mainImg.classList.add('card__main-img--fade-out');
      mainImg.addEventListener('transitionend', function handler() {
        mainImg.src = newSrc;
        mainImg.removeEventListener('transitionend', handler);
        // Dar un frame para que el navegador procese el nuevo src
        requestAnimationFrame(function () {
          mainImg.classList.remove('card__main-img--fade-out');
        });
      }, { once: true });
    }
  });
}

/* -------------------------------------------------------
   3. FILTRO DE CATEGORÍAS (solo en catalogo.html)
   ------------------------------------------------------- */
function initCategoryFilter() {
  var filterSection = document.querySelector('.filter-section');
  if (!filterSection) return;

  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards      = document.querySelectorAll('.product-card');
  var noResults  = document.getElementById('noResults');

  // Leer parámetro ?cat= de la URL
  var params     = new URLSearchParams(window.location.search);
  var preselect  = params.get('cat') || 'todos';

  function applyFilter(selected) {
    var visible = 0;

    cards.forEach(function (card) {
      if (selected === 'todos' || card.dataset.category === selected) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    // Mostrar/ocultar mensaje de sin resultados
    if (noResults) {
      noResults.classList.toggle('hidden', visible > 0);
    }

    // Actualizar URL sin recargar
    var newUrl = selected === 'todos'
      ? window.location.pathname
      : window.location.pathname + '?cat=' + selected;
    history.replaceState(null, '', newUrl);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });

    // Marcar el botón de preselección
    if (btn.dataset.filter === preselect) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Aplicar filtro inicial
  applyFilter(preselect);
}

/* -------------------------------------------------------
   4. UTILIDADES (año, formulario, smooth scroll)
   ------------------------------------------------------- */
function initUtils() {
  // Año automático en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Formulario de contacto
  var form = document.getElementById('contactoForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombreInput  = document.getElementById('nombre');
      var correoInput  = document.getElementById('correo');
      var nombreError  = document.getElementById('nombreError');
      var correoError  = document.getElementById('correoError');
      var valid        = true;
      var emailRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Limpiar errores previos
      [nombreInput, correoInput].forEach(function (el) {
        el.classList.remove('field--error');
      });
      [nombreError, correoError].forEach(function (el) {
        if (el) el.classList.remove('visible');
      });

      // Validar nombre
      if (!nombreInput.value.trim()) {
        nombreInput.classList.add('field--error');
        if (nombreError) nombreError.classList.add('visible');
        valid = false;
      }

      // Validar correo
      if (!correoInput.value.trim() || !emailRegex.test(correoInput.value.trim())) {
        correoInput.classList.add('field--error');
        if (correoError) correoError.classList.add('visible');
        valid = false;
      }

      if (!valid) return;

      // Mostrar mensaje de éxito
      var nombre = nombreInput.value.trim();
      var correo = correoInput.value.trim();
      var parent = form.parentElement;

      var successDiv = document.createElement('div');
      successDiv.className = 'form__success';
      successDiv.innerHTML =
        '<h3>¡Mensaje recibido!</h3>' +
        '<p>Gracias, <strong>' + nombre + '</strong>. Nos pondremos en contacto contigo pronto a <strong>' + correo + '</strong>.</p>';

      form.replaceWith(successDiv);
    });
  }

  // Smooth scroll para anclas en navegadores sin soporte nativo
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* -------------------------------------------------------
   5. BLOG (lee BLOG_POSTS de blog-data.js y renderiza)
   ------------------------------------------------------- */
function initBlog() {
  if (typeof BLOG_POSTS === 'undefined') return;

  // --- Preview en index.html (últimas 2 entradas) ---
  var previewGrid = document.getElementById('blogPreviewGrid');
  if (previewGrid) {
    var preview = BLOG_POSTS.slice(0, 2);
    previewGrid.innerHTML = preview.map(function (post) {
      return (
        '<article class="blog-card">' +
          '<a href="blog.html#' + post.id + '" class="blog-card__img-wrap">' +
            '<img src="' + post.image + '" alt="' + post.imageAlt + '" loading="lazy">' +
          '</a>' +
          '<div class="blog-card__body">' +
            '<span class="blog-card__date">' + post.dateLabel + '</span>' +
            '<h3 class="blog-card__title"><a href="blog.html#' + post.id + '">' + post.title + '</a></h3>' +
            '<p class="blog-card__excerpt">' + post.excerpt + '</p>' +
            '<a href="blog.html#' + post.id + '" class="blog-card__read-more">Leer más →</a>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  // --- Lista completa en blog.html ---
  var fullList = document.getElementById('blogFullList');
  if (fullList) {
    fullList.innerHTML = BLOG_POSTS.map(function (post) {
      var paragraphs = post.content.map(function (p) {
        return '<p>' + p + '</p>';
      }).join('');
      return (
        '<article class="blog-article" id="' + post.id + '">' +
          '<div class="blog-article__img-wrap">' +
            '<img src="' + post.image + '" alt="' + post.imageAlt + '" loading="lazy">' +
          '</div>' +
          '<div class="blog-article__body">' +
            '<span class="blog-card__date">' + post.dateLabel + '</span>' +
            '<h2 class="blog-article__title">' + post.title + '</h2>' +
            '<div class="blog-article__content">' + paragraphs + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }
}

/* -------------------------------------------------------
   INICIALIZACIÓN
   ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initNav();
  initImageSwitchers();
  initCategoryFilter();
  initBlog();
  initUtils();
});
