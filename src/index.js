import React from "react";
import ReactDOM from "react-dom/client";

// Sesión 2: importamos los estilos de Bootstrap ANTES de los estilos propios,
// para que nuestras reglas en index.css puedan sobreescribirlos si hace falta.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

// Punto de entrada de la aplicación: montamos <App /> dentro de <div id="root">.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
