# Formulario React + Bootstrap

Formulario de **registro** desarrollado con **React** y estilizado con **Bootstrap 5**, con **validaciones dinámicas en tiempo real**. Corresponde a la **Unidad 2: Frameworks (React + CSS Framework)**, cuyo objetivo es migrar el formulario a React, aplicar estilos con un framework CSS y añadir validaciones más completas.

---

## 🎯 Características

- Formulario de registro con tres campos: **Nombre**, **Correo** y **Contraseña**.
- **Validación en tiempo real** mientras el usuario escribe (no hay que esperar al envío).
- **Mensajes de error dinámicos** debajo de cada campo.
- Al pulsar **Registrarse** se validan todos los campos y se muestran los errores; el registro solo se completa si todo es válido.
- Mensaje de **éxito** al completar un registro válido.
- Interfaz **responsiva** (se adapta a móvil, tablet y escritorio) gracias a la grilla de Bootstrap (`container` / `row` / `col-*`).

### Reglas de validación

| Campo       | Regla                                                              |
| ----------- | ------------------------------------------------------------------ |
| Nombre      | Obligatorio, **solo letras y espacios** y con al menos **3 caracteres**. |
| Correo      | Obligatorio y con **formato de correo válido** (`ejemplo@correo.com`). |
| Contraseña  | Obligatoria, mínimo **8 caracteres** e incluir al menos **una mayúscula, una minúscula y un número**. |

---

## 🛠️ Tecnologías

- [React 18](https://react.dev/) (Hook `useState`)
- [Bootstrap 5](https://getbootstrap.com/)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- Node.js y npm

---

## 📋 Requisitos previos

Antes de empezar necesitas tener instalado:

- **Node.js** (versión 16 o superior). Descárgalo desde [nodejs.org](https://nodejs.org/).
- **npm** (se instala junto con Node.js).

Puedes verificar que están instalados con:

```bash
node --version
npm --version
```

---

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/USUARIO/formulario-react.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd formulario-react
   ```

3. Instala las dependencias (React, Bootstrap, etc.):

   ```bash
   npm install
   ```

> Reemplaza `USUARIO` por tu usuario de GitHub. Si descargaste el proyecto como `.zip`, omite el paso 1 y entra directamente a la carpeta.

---

## ▶️ Ejecución

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

Luego abre tu navegador en **[http://localhost:3000](http://localhost:3000)**. La página se recargará automáticamente cada vez que guardes un cambio.

### Generar la versión de producción

Para crear una versión optimizada en la carpeta `build/`:

```bash
npm run build
```

---

## 🖼️ Imagen de fondo

El fondo usa una imagen ubicada en `public/fondo.jpg`. Para cambiarla, reemplaza ese archivo por la tuya (mismo nombre). Si el archivo no existe, se muestra automáticamente un degradado cálido de respaldo.

---

## 📁 Estructura del proyecto

```
formulario-react/
├── public/
│   └── index.html            # Plantilla HTML donde se monta React
├── src/
│   ├── components/
│   │   ├── Logo.js                 # Logotipo (SVG)
│   │   ├── FormularioRegistro.js   # Formulario: estado, validación y envío
│   │   └── CampoFormulario.js      # Campo reutilizable (icono + input + error)
│   ├── utils/
│   │   └── validaciones.js         # Funciones de validación reutilizables
│   ├── App.js                # Componente raíz / layout responsivo
│   ├── App.css               # Estilos del layout
│   ├── index.js              # Punto de entrada (importa Bootstrap aquí)
│   └── index.css             # Estilos globales
├── .gitignore
├── package.json
└── README.md
```

---

## 🧩 ¿Cómo funciona? (resumen por sesiones)

- **Sesión 1 — React:** se estructuran los componentes (`App.js`, `FormularioRegistro.js`) y se crea el formulario con los inputs de Nombre, Correo y Contraseña.
- **Sesión 2 — Bootstrap:** se instala Bootstrap (`npm install bootstrap`), se importa en `src/index.js` y se aplican clases como `container`, `row`, `col-*`, `form-control` y `btn` para lograr un diseño responsivo.
- **Sesión 3 — Validaciones dinámicas:** se usa `useState` para controlar los inputs, se valida en tiempo real (correo con formato y contraseña de 8+ caracteres) y se muestran mensajes de error dinámicos debajo de cada campo.

---

## 👤 Autor

Proyecto académico — Unidad 2: Frameworks (React + CSS Framework).
