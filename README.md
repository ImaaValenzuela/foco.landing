# 🌐 F.O.C.O — Landing Page (`mente.landing`)

Este repositorio contiene el código fuente de la landing page comercial de **F.O.C.O** (Filtro Operativo contra el Caos y la Omisión), el segundo cerebro visual que ayuda a estudiantes y profesionales a ordenar su caos mental en un tablero intuitivo.

La landing page está optimizada para la conversión, el posicionamiento en motores de búsqueda (SEO) y tiempos de carga ultrarrápidos utilizando herramientas de desarrollo modernas.

---

## 🎯 Propósito del Proyecto

- **Conversión:** Captar el interés de estudiantes y profesionales con una explicación interactiva y visual de F.O.C.O.
- **Onboarding Indirecto:** Guiar al usuario hacia el registro mediante llamados a la acción (CTAs) claros.
- **Educación:** Explicar el concepto del "Segundo Cerebro Visual", el acrónimo F.O.C.O y las ventajas del modelo de productividad.
- **SEO & Performance:** Estructura semántica liviana, sin frameworks pesados en el frontend para lograr la máxima velocidad de carga.

---

## 🛠️ Stack Tecnológico & Arquitectura Actual

El proyecto ha sido estructurado con una arquitectura simple, moderna y de alto rendimiento:

1. **Vite (Bundler & Dev Server):** Se utiliza **Vite** para ofrecer recarga en caliente instantánea (HMR) durante el desarrollo y empaquetar de forma optimizada los recursos estáticos para producción.
2. **HTML5 Semántico:** Estructura web estándar que prioriza la legibilidad por parte de motores de búsqueda (SEO) y la accesibilidad.
3. **Vanilla JavaScript & Web Components (Arquitectura de Producción):**
   - El proyecto sigue el **Principio de Responsabilidad Única (SRP)** mediante el uso de **Web Components (Custom Elements nativos)**.
   - Cada sección del sitio (Header, Hero, Problem, Acronym, Features, MisionVision, WhyImporta, CtaFinal, Footer) está encapsulada en su propio componente autogestionado dentro de `src/components/`.
   - La lógica de renderizado y el comportamiento interactivo (como el menú responsive en el Header o el año del copyright dinámico en el Footer) están contenidos dentro de sus respectivas clases de componentes, eliminando la dispersión del código.
4. **CSS3 Modular, Design Tokens & Mobile First:**
   - La maqueta y el sistema visual están estructurados con un enfoque **Mobile First** en `src/style.css` usando **Variables CSS (Design Tokens)** para colores, tipografías y espaciado.
   - Los estilos base definen la experiencia para dispositivos móviles y se escalan de manera progresiva mediante media queries de tipo `min-width` (en puntos de ruptura de `600px`, `860px` y `900px`).
   - Maquetación adaptable mediante **CSS Grid** y **Flexbox** fluidos, asegurando compatibilidad con múltiples tamaños de pantalla.
   - Animaciones y transiciones optimizadas para pantallas de alta densidad y baja latencia táctil.

---

## 📂 Estructura del Proyecto (Scaffolding)

```text
mente.landing/
├── public/              # Recursos estáticos servidos directamente (sin procesar por Vite)
│   ├── logo.png         # Logo principal de F.O.C.O
│   ├── acronimo.png     # Gráfico explicativo del acrónimo
│   ├── icons.svg        # Sprite de iconos vectoriales
│   └── favicon.svg      # Icono del navegador
├── src/
│   ├── components/      # Componentes web modulares (Single Responsibility Principle)
│   │   ├── Header/      # Carpeta para el Header (Menú y toggle responsive)
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/        # Carpeta para el Hero (Presentación y tablero interactivo)
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── Problem/     # Carpeta para el Problema (Sobrecarga de información)
│   │   │   ├── Problem.js
│   │   │   └── Problem.css
│   │   ├── Acronym/     # Carpeta para el Acrónimo (Filtro Operativo...)
│   │   │   ├── Acronym.js
│   │   │   └── Acronym.css
│   │   ├── Features/    # Carpeta para las Funcionalidades principales
│   │   │   ├── Features.js
│   │   │   └── Features.css
│   │   ├── MisionVision/ # Carpeta para la Misión y Visión
│   │   │   ├── MisionVision.js
│   │   │   └── MisionVision.css
│   │   ├── WhyImporta/  # Carpeta para la sección "Por qué importa"
│   │   │   ├── WhyImporta.js
│   │   │   └── WhyImporta.css
│   │   ├── CtaFinal/    # Carpeta para el llamado a la acción final
│   │   │   ├── CtaFinal.js
│   │   │   └── CtaFinal.css
│   │   └── Footer/      # Carpeta para el Footer (Pie de página y año dinámico)
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── main.js          # Punto de entrada de JS (importa y registra componentes)
│   └── style.css        # Estilos globales, diseño responsivo y tokens de diseño CSS
├── docs/                # Documentación del proyecto
│   ├── 01-vision-y-producto.md   # Visión general y pitch comercial del producto
│   ├── 05-modelo-de-negocio.md    # Precios, monetización y conversión
│   └── 07-devops-y-git.md        # Estrategia de Git y flujo de trabajo diario
├── index.html           # Punto de entrada principal (HTML semántico y declarativo)
├── package.json         # Scripts de Vite y configuración del proyecto
├── package-lock.json    # Historial detallado de dependencias instaladas
└── README.md            # Este archivo de documentación
```

---

## 🚀 Inicio Rápido (Desarrollo Local)

Para correr la landing page localmente y empezar a desarrollar, sigue estos pasos:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm`.

### Pasos de Instalación

1. **Clonar el repositorio** y navegar a la carpeta del proyecto:

   ```bash
   cd mente.landing
   ```

2. **Instalar las dependencias de desarrollo:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Vite levantará el servidor de desarrollo y proveerá una URL local (usualmente `http://localhost:5173`). Cualquier cambio que realices en el código se reflejará automáticamente en el navegador.

---

## 📦 Comandos Disponibles (Scripts)

En el archivo `package.json` dispones de los siguientes scripts de automatización:

- **`npm run dev`**: Inicia el servidor de desarrollo de Vite con Hot Module Replacement (HMR).
- **`npm run build`**: Compila y optimiza el código fuente (minifica HTML, CSS y JS, optimiza assets) para producción. Los archivos listos para producción se generan en la carpeta `dist/`.
- **`npm run preview`**: Levanta un servidor local apuntando a la carpeta `dist/` para previsualizar la compilación de producción exactamente como se vería en producción.

---

## ⚙️ Integración Continua (CI)

El proyecto cuenta con un flujo de integración continua configurado a través de **GitHub Actions** en [.github/workflows/ci.yml](file:///.github/workflows/ci.yml).

En cada **Push** o **Pull Request** hacia las ramas principales (`main`, `master`), el pipeline automatizado realiza las siguientes comprobaciones:

1. Configura un entorno limpio de ejecución con Node.js 20.
2. Instala las dependencias usando `npm ci` para garantizar builds reproducibles.
3. Ejecuta la compilación de producción (`npm run build`) para verificar la integridad del empaquetado de Vite y descartar errores de importación o sintaxis.

---

## 📑 Documentación Relacionada

Para comprender el flujo del negocio y las directrices técnicas del equipo, revisa los documentos en la carpeta `/docs`:

- [Visión y Pitch de Producto](./docs/01-vision-y-producto.md)
- [Modelo de Negocio (Precios y Conversión)](./docs/05-modelo-de-negocio.md)
- [Estrategia Git y Configuración de GitHub](./docs/07-devops-y-git.md)
