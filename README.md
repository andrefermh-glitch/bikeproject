# Bicis Chinas Pro — Catálogo en línea

Catálogo web estático de bicicletas y componentes de alto rendimiento. **Solo catálogo de referencia — sin carrito ni pagos en línea.**

---

## Estructura de archivos

```
BikeProject1/
├── index.html        → Página principal (hero, manifiesto, categorías, contacto)
├── catalogo.html     → Catálogo completo con filtro por categoría
├── style.css         → Todos los estilos
├── script.js         → JavaScript vanilla (menú, switcher de imágenes, filtros)
├── README.md         → Este archivo
└── images/           → Carpeta de imágenes locales (placeholder)
```

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

3. **Usa el mismo slug** (`mi-nueva-categoria`) en el `data-category` de los productos de esa categoría. No necesitas tocar el JavaScript — el filtro es dinámico.

---

## Cómo cambiar las imágenes (reemplazar placeholders)

Las imágenes de referencia actuales son URLs externas de las páginas de Yoeleo, Winspace, Quick Pro y XDS. Para reemplazarlas con fotos propias:

1. Guarda tu imagen en la carpeta `/images/` con un nombre descriptivo, por ejemplo: `cuadro-carbono-t800-01-a.jpg`.
2. En la tarjeta del producto, reemplaza el valor del atributo `src` y `data-src` con la ruta local:
   ```html
   src="images/cuadro-carbono-t800-01-a.jpg"
   ```
3. Haz lo mismo en las miniaturas (`.thumb`).

**Convención de nombres sugerida:**
```
[categoria]-[nombre-corto]-[numero]-[vista].jpg
Ejemplos:
  cuadro-carbono-aero-01-a.jpg   ← vista principal
  cuadro-carbono-aero-01-b.jpg   ← vista lateral
  cuadro-carbono-aero-01-c.jpg   ← detalle
```

**Tamaño recomendado:** 800×600 px mínimo, proporción 4:3. Máximo 200 KB por imagen (usa [Squoosh](https://squoosh.app) para comprimir).

---

## Cómo cambiar el color de acento

En `style.css`, en la parte superior del archivo, cambia el valor de `--color-accent`:

```css
:root {
  --color-accent: #f5c200;  /* amarillo eléctrico (predeterminado) */
  /* Opciones alternativas: */
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

### Netlify (más fácil)
1. Arrastra la carpeta `BikeProject1/` al panel de Netlify en [app.netlify.com](https://app.netlify.com).
2. Netlify detecta automáticamente que es un sitio estático.
3. El sitio queda publicado en segundos en una URL `*.netlify.app`.

### GitHub Pages
1. Sube la carpeta a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/` (raíz).
4. Guarda. El sitio queda disponible en `https://[tu-usuario].github.io/[nombre-repo]/`.

### Cualquier hosting estático
Sin build, sin dependencias. Sube los 4 archivos + la carpeta `images/` tal cual.

---

## Para habilitar envío real del formulario de contacto (Netlify Forms)

Agrega los atributos `name` y `netlify` al `<form>` en `index.html`:

```html
<form class="contacto__form" id="contactoForm" name="contacto" netlify novalidate>
```

Netlify detectará el formulario automáticamente y recibirás los mensajes en el panel de Netlify.

---

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Custom Properties (variables)
- JavaScript ES6 vanilla
- Google Fonts: Barlow Condensed + Inter
- Sin frameworks · Sin dependencias · Sin build tools
