# Bicis Chinas Pro — Catálogo en línea

Catálogo web estático de bicicletas y componentes de alto rendimiento. **Solo catálogo de referencia — sin carrito ni pagos en línea.**

---

## Estructura de archivos

```
BikeProject1/
├── index.html        → Página principal (hero, manifiesto, categorías, productos, cómo comprar, blog, contacto)
├── catalogo.html     → Catálogo completo con filtro por categoría
├── blog.html         → Página completa del blog
├── blog-data.js      → Entradas del blog (editar aquí para publicar nuevos artículos)
├── style.css         → Todos los estilos
├── script.js         → JavaScript vanilla (menú, switcher de imágenes, filtros, renderizado del blog)
├── README.md         → Este archivo
└── images/           → Carpeta de imágenes locales
```

---

## Cómo publicar una nueva entrada en el blog

1. Abre `blog-data.js`.
2. Copia el bloque de plantilla que está en los comentarios al inicio del archivo.
3. Pégalo al **inicio** del array `BLOG_POSTS` (justo después del `[`).
4. Rellena los campos: título, fecha, imagen, resumen y párrafos.
5. Guarda, haz commit y push → Netlify redespliega automáticamente.

La entrada más nueva siempre aparece primero. No hay que tocar ningún otro archivo.

---

## Cómo agregar un producto

1. Abre `catalogo.html` en tu editor de texto.
2. Localiza el comentario de la categoría donde quieres agregar el producto.
3. Copia el siguiente bloque completo y pégalo dentro del `<div id="productGrid">`:

```html
<article
  class="product-card"
  data-category="SLUG-DE-CATEGORIA"
  data-images="images/mi-producto-01-a.jpg,images/mi-producto-01-b.jpg"
>
  <div class="card__gallery">
    <div class="card__main-img-wrap">
      <img
        class="card__main-img"
        src="images/mi-producto-01-a.jpg"
        alt="Descripción del producto — vista principal"
        loading="lazy"
      >
    </div>
    <div class="card__thumbnails">
      <button class="thumb active" data-src="images/mi-producto-01-a.jpg" aria-label="Vista 1">
        <img src="images/mi-producto-01-a.jpg" alt="">
      </button>
      <button class="thumb" data-src="images/mi-producto-01-b.jpg" aria-label="Vista 2">
        <img src="images/mi-producto-01-b.jpg" alt="">
      </button>
    </div>
  </div>
  <div class="card__info">
    <span class="card__category-badge">Nombre de la categoría</span>
    <h3 class="card__name">Nombre del producto</h3>
    <ul class="card__specs">
      <li><span class="spec-label">Material:</span> Fibra de carbono T800</li>
      <li><span class="spec-label">Talla:</span> S / M / L</li>
      <li><span class="spec-label">Peso:</span> 000 g</li>
      <li><span class="spec-label">Compatibilidad:</span> Shimano / SRAM</li>
    </ul>
    <div class="card__price">
      <span class="card__price-amount">USD $000</span>
    </div>
    <a href="index.html#contacto" class="btn btn--card">Consultar disponibilidad</a>
  </div>
</article>
```

4. Cambia `data-category` al slug correspondiente (ver tabla abajo).
5. Actualiza los `src` y `data-src` de las imágenes.
6. Edita el nombre, especificaciones y precio.
7. Guarda el archivo. Listo.

> Para que el producto también aparezca en la página principal, abre `index.html` y agrega una copia del mismo bloque dentro del `<div class="product-grid">` en la sección `#destacados`.

---

## Categorías disponibles y sus slugs

Usa exactamente estos valores en el atributo `data-category` de cada tarjeta.

| Nombre visible                    | Valor de `data-category` |
|-----------------------------------|--------------------------|
| Bicicletas de ruta                | `bicicletas-ruta`        |
| Bicicletas de montaña             | `bicicletas-montana`     |
| Cuadros de carbono                | `cuadros-carbono`        |
| Grupos y transmisión              | `grupos-transmision`     |
| Ruedas y llantas                  | `ruedas-llantas`         |
| Manubrios y potencias             | `manubrios-potencias`    |
| Sillines y tijas                  | `sillines-tijas`         |
| Accesorios y componentes varios   | `accesorios`             |

---

## Cómo agregar una nueva categoría

1. **Agrega el botón de filtro** en `catalogo.html`, dentro del `<div id="filterBar">`:
   ```html
   <button class="filter-btn" data-filter="mi-nueva-categoria">Mi nueva categoría</button>
   ```

2. **Agrega el enlace de categoría** en `index.html`, dentro del `.category-grid`:
   ```html
   <a class="category-card no-img" href="catalogo.html?cat=mi-nueva-categoria" aria-label="Mi nueva categoría">
     <img src="images/cat-nueva.jpg" alt="Mi nueva categoría" loading="lazy">
     <span class="category-card__label">Mi nueva categoría</span>
   </a>
   ```

3. **Usa el mismo slug** en el `data-category` de los productos. No hay que tocar el JavaScript — el filtro es dinámico.

---

## Cómo cambiar las imágenes

Las imágenes actuales son URLs externas (Yoeleo, Winspace, XDS). Para reemplazarlas con fotos propias:

1. Guarda la imagen en `/images/` con un nombre descriptivo.
2. Reemplaza el `src` y `data-src` en la tarjeta del producto:
   ```html
   src="images/cuadro-carbono-t800-01-a.jpg"
   ```

**Convención de nombres sugerida:**
```
[categoria]-[nombre-corto]-[numero]-[vista].jpg
Ejemplos:
  cuadro-carbono-aero-01-a.jpg   ← vista principal
  cuadro-carbono-aero-01-b.jpg   ← vista lateral
```

**Tamaño recomendado:** 800×600 px mínimo. Máximo 200 KB (usa [Squoosh](https://squoosh.app) para comprimir).

---

## Cómo cambiar el color de acento

En `style.css`, al inicio del archivo, cambia `--color-accent`:

```css
:root {
  --color-accent: #f5c200;  /* amarillo (predeterminado) */
  /* --color-accent: #e8002a;  rojo */
  /* --color-accent: #ffffff;  blanco */
}
```

---

## Información de contacto

Para actualizar el número de WhatsApp, correo o Instagram, edita la sección `#contacto` en `index.html`:

```html
<!-- WhatsApp: reemplaza XXXXXXXXXX con el número completo (con código de país) -->
<a href="https://wa.me/521XXXXXXXXXX?text=...">

<!-- Correo -->
<a href="mailto:ventas@bicischinaspro.com">

<!-- Instagram -->
<a href="https://instagram.com/bicischinaspro">
```

---

## Despliegue

El sitio está conectado a GitHub. Cada push a `main` redespliega automáticamente en Netlify.

```
Editar archivos → commit → git push → Netlify redespliega (~30 s)
```

Repositorio: `https://github.com/andrefermh-glitch/bikeproject`

---

## Para habilitar envío real del formulario (Netlify Forms)

Agrega los atributos `name` y `netlify` al `<form>` en `index.html`:

```html
<form class="contacto__form" id="contactoForm" name="contacto" netlify novalidate>
```

Netlify detectará el formulario y recibirás los mensajes en el panel de Netlify.

---

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Custom Properties (variables)
- JavaScript ES6 vanilla
- Google Fonts: Barlow Condensed + Inter
- Sin frameworks · Sin dependencias · Sin build tools
