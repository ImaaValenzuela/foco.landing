# 🌐 Mente — Landing Page (`mente-landing`)

Este repositorio contiene el código fuente de la landing page comercial de **Mente**, accesible en [mente.com](https://mente.com). Está optimizada para posicionamiento en motores de búsqueda (SEO) y conversión de nuevos usuarios.

---

## 🎯 Propósito del Repositorio

- **Conversión:** Captar el interés de estudiantes y profesionales con una explicación interactiva y visual del producto.
- **Onboarding Indirecto:** Guiar al usuario hacia el registro mediante llamados a la acción (CTAs) claros.
- **Educación:** Explicar el concepto del "Segundo Cerebro Visual" y el modelo Freemium.

---

## 🛠️ Stack Tecnológico Recomendado (Propuesta)

- **Framework:** Next.js (SSG - Static Site Generation) para un tiempo de carga instantáneo y SEO óptimo.
- **Estilos:** Vanilla CSS / TailwindCSS.
- **Despliegue:** Vercel (conectado automáticamente a la rama `main`).

---

## 📂 Estructura del Proyecto

```
mente-landing/
├── public/              # Recursos estáticos (imágenes, logos, iconos)
├── src/
│   ├── components/      # Componentes UI reutilizables (Hero, Pricing, FAQ)
│   ├── pages/           # Rutas estáticas de la landing
│   └── styles/          # Estilos globales y módulos CSS
├── docs/                # Enlace a documentación del sub-proyecto
└── README.md            # Este archivo
```

---

## 🚀 Inicio Rápido (Local)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Correr en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📑 Documentación Relacionada

Para entender el contexto de negocio, el modelo de precios y el pitch del producto, revisa la documentación centralizada:
- [Visión y Pitch de Producto](./docs/01-vision-y-producto.md)
- [Modelo de Negocio (Precios y Conversión)](./docs/05-modelo-de-negocio.md)
- [Estrategia Git y Configuración de GitHub](./docs/07-devops-y-git.md)
