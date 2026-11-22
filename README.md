# BuildSafe — Landing Page

Landing Page del proyecto **BuildSafe**, desarrollada para el curso **HCI for UX Design (1ASI0784)** de la Universidad Peruana de Ciencias Aplicadas, ciclo 2026-20.

## Sobre el proyecto

BuildSafe es una propuesta de aplicación móvil que guía a las familias de viviendas autoconstruidas de Lima y Callao a través de una evaluación preliminar de la vulnerabilidad sísmica de su casa, y les devuelve un resultado comprensible con recomendaciones priorizadas de prevención.

El conocimiento técnico para evaluar una vivienda ya existe —las normas E.030 y E.070, las guías de reforzamiento del SENCICO, las fichas de inspección—, pero está escrito para ingenieros. BuildSafe traduce ese instrumento a un lenguaje que la familia que habita la vivienda pueda usar.

> **Alcance:** la evaluación que propone BuildSafe es preliminar y orientativa. No constituye el informe oficial de un ingeniero ni un documento con validez legal o municipal.

## Página publicada

https://w4v3y.github.io/buildsafe-landing/

## Tecnologías

HTML5, CSS3 y JavaScript, sin frameworks ni dependencias externas.

## Estructura del repositorio

```
.
├── index.html      Estructura semántica: encabezado, características, metodología, contacto y pie
├── styles.css      Paleta, tipografía, componentes y consultas de medio del diseño responsive
├── script.js       Interacciones: botones, navegación, detección de conexión y animaciones
├── assets/         Imágenes y logotipo
└── README.md
```

## Funcionalidades implementadas

- Acceso simulado para líderes comunitarios, con validación del código ingresado
- Inicio del proceso de evaluación de viviendas
- Solicitud de acceso desde la sección de contacto
- Navegación directa entre las secciones de la página
- Detección automática del estado de conexión, comunicada con texto y no solo con color
- Animaciones de aparición progresiva en las tarjetas de características y metodología

## Accesibilidad

- Textos alternativos en todas las imágenes
- Jerarquía de encabezados `h1`, `h2` y `h3` sin saltos de nivel
- Contraste de texto conforme a WCAG 2.1 nivel AA
- Niveles de riesgo identificados con color, ícono y etiqueta de texto
- Navegación completa por teclado con foco visible
- Idioma del documento declarado en el elemento raíz

## Ejecutar en local

No requiere instalación ni servidor. Basta con clonar el repositorio y abrir `index.html` en el navegador:

```bash
git clone https://github.com/w4v3y/buildsafe-landing.git
cd buildsafe-landing
```

## Equipo — Grupo 05

| Integrante | Código |
|---|---|
| Banda Aguirre, Josue Martin | U202512107 |
| Mesias Luna, Adelise Aileen Alessandra | U202515643 |
| Merjildo Paquiyauri, Andrea Nicolle | U202517416 |
| Oscanoa Villanueva, Mauro Tomas | U202519508 |
| Cusco Velasquez, Alejandro Jerico | U202511679 |
| Veramendi Salas, Raul Shaiel | U202512344 |

Proyecto académico. Universidad Peruana de Ciencias Aplicadas, 2026-20.
