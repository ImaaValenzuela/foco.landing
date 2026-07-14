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
3. **CSS3 Modular & Design Tokens:**
   - Hojas de estilo estructuradas en `src/style.css` usando **Variables CSS (Design Tokens)** para colores, tipografías y espaciado de la marca (Azul y Naranja F.O.C.O).
   - Layouts modernos y adaptables construidos con **CSS Grid** y **Flexbox**.
   - Animaciones y transiciones de alto rendimiento para interactividad fluida sin sobrecargar el hilo principal.
4. **Vanilla JavaScript (ES Modules):**
   - Código JS modular en `src/main.js` importado nativamente.
   - Manejo ligero del DOM para comportamiento interactivo (menú responsive móvil, actualización dinámica de fechas en el footer).

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
│   ├── main.js          # Lógica interactiva en JavaScript (comportamientos de interfaz)
│   └── style.css        # Estilos globales, diseño responsivo y tokens de diseño CSS
├── docs/                # Documentación del proyecto
│   ├── 01-vision-y-producto.md   # Visión general y pitch comercial del producto
│   ├── 05-modelo-de-negocio.md    # Precios, monetización y conversión
│   └── 07-devops-y-git.md        # Estrategia de Git y flujo de trabajo diario
├── index.html           # Punto de entrada principal (HTML semántico y enlaces a assets)
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

## 📑 Documentación Relacionada

Para comprender el flujo del negocio y las directrices técnicas del equipo, revisa los documentos en la carpeta `/docs`:
- [Visión y Pitch de Producto](./docs/01-vision-y-producto.md)
- [Modelo de Negocio (Precios y Conversión)](./docs/05-modelo-de-negocio.md)
- [Estrategia Git y Configuración de GitHub](./docs/07-devops-y-git.md)
