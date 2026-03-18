/* ============================================================
   BICIS CHINAS PRO — Blog
   ============================================================

   CÓMO AÑADIR UNA ENTRADA NUEVA
   ─────────────────────────────
   1. Copia el bloque de plantilla de abajo.
   2. Pégalo al INICIO del array BLOG_POSTS (después del "[").
   3. Rellena los campos. No olvides la coma al final del bloque.
   4. Guarda el archivo, haz commit y push. Listo.

   PLANTILLA — copia desde aquí:
   ──────────────────────────────────────────────────────────
   {
     id:        'slug-unico-sin-espacios',       // solo letras, números y guiones
     dateLabel: '17 marzo 2026',                 // fecha visible para el lector
     title:     'Título del artículo aquí',
     excerpt:   'Resumen breve que aparece en la tarjeta previa. Una o dos frases.',
     image:     'https://url-de-la-imagen.jpg',  // URL pública de la imagen
     imageAlt:  'Descripción breve de la imagen',
     content: [
       'Primer párrafo...',
       'Segundo párrafo...',
       'Tercer párrafo (opcional, borra esta línea si no lo necesitas).'
     ]
   },
   ──────────────────────────────────────────────────────────
============================================================ */

var BLOG_POSTS = [

  {
    id:        'yoeleo-worldtour-2026',
    dateLabel: '12 marzo 2026',
    title:     'Yoeleo en el WorldTour: el carbono chino compite en la cima',
    excerpt:   'Los cuadros fabricados en Fujian ya ruedan en las carreras más exigentes del calendario UCI. Yoeleo lidera la carga de una industria que dejó de ser un secreto.',
    image:     'https://www.yoeleo.com/cdn/shop/files/YOELEO-CHUAN-R12.jpg?v=1757800969&width=1200',
    imageAlt:  'Bicicleta de ruta Yoeleo R12 de carbono',
    content: [
      'Durante los últimos dos años, Yoeleo ha pasado de ser un secreto entre ciclistas amateur a aparecer de forma recurrente en el circuito profesional UCI. Sus cuadros de carbono T800, fabricados en los mismos talleres que surten a marcas europeas de renombre, han demostrado superar los estándares de rigidez y peso que exige el pelotón de élite. El modelo CHUAN R12, con menos de 800 g de cuadro y geometría aero de diseño propio, es hoy la referencia de la casa.',
      'Equipos continentales de Europa y América Latina lo han adoptado para una temporada completa —incluyendo etapas de carreras UCI ProSeries— confirmando que la tolerancia dimensional y el acabado de laminado están al nivel de lo que se paga tres veces más caro en una marca occidental. La diferencia está en el modelo de negocio: sin intermediarios, sin margen de distribuidor, sin pagar por el logo.',
      'El mensaje es claro: la fabricación china ya no es sinónimo de segunda división. Es donde se hace, de verdad, el ciclismo de alto rendimiento.'
    ]
  },

  {
    id:        'winspace-clasicas-primavera-2026',
    dateLabel: '3 marzo 2026',
    title:     'Winspace y las clásicas: tecnología sin etiqueta de precio de fantasía',
    excerpt:   'El cuadro aero LOR de Winspace acumula resultados en clásicas europeas. La industria toma nota de que el rendimiento real ya no tiene precio de lujo.',
    image:     'https://winspace.com.au/cdn/shop/files/IMG_7699.jpg?v=1747377285&width=1200',
    imageAlt:  'Cuadro aero Winspace LOR de carbono',
    content: [
      'Winspace lleva tres temporadas perfeccionando su cuadro aero LOR, y los resultados en carrera hablan por sí solos. Equipos ciclistas europeos han completado temporadas completas sobre este cuadro —incluidas etapas de clásicas UCI ProSeries— constatando que la rigidez torsional y la integración aerodinámica están al nivel de los referentes del mercado, a menos de la mitad del precio.',
      'Lo que diferencia a Winspace de otras marcas chinas es el control total del proceso: diseño, moldes, laminado y control de calidad ocurren bajo el mismo techo en su planta de Shenzhen. Eso se traduce en consistencia entre unidades y tolerancias que satisfacen los protocolos de inspección más estrictos del ciclismo profesional. No es suerte; es ingeniería replicable.'
    ]
  }

];
