import React from "react";
import Logo from "./components/Logo";
import FormularioRegistro from "./components/FormularioRegistro";
import "./App.css";

// Capas del fondo (de arriba hacia abajo):
//   1) velo oscuro tenue -> da contraste al texto blanco
//   2) la foto de fondo: coloca tu imagen en  public/fondo.jpg
//   3) degradados cálidos de respaldo -> se ven si aún no hay foto
//
// Se referencia la foto con process.env.PUBLIC_URL (carpeta public) para que
// la ruta funcione tanto en desarrollo como en producción. Al hacerlo como
// estilo en línea, webpack NO intenta empaquetar el archivo: si no existe,
// simplemente se muestran los degradados de respaldo.
const estiloFondo = {
  backgroundImage: [
    "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3))",
    `url(${process.env.PUBLIC_URL}/fondo.jpg)`,
    "radial-gradient(ellipse at 82% 88%, rgba(120, 130, 70, 0.55), transparent 45%)",
    "radial-gradient(ellipse at 22% 28%, rgba(255, 205, 160, 0.5), transparent 55%)",
    "linear-gradient(150deg, #f4a878 0%, #ef7f52 38%, #e8603a 68%, #a85638 100%)",
  ].join(", "),
};

// Componente raíz: fondo cálido (o tu foto) a pantalla completa con el
// contenido (logo + formulario) centrado, al estilo de una pantalla de acceso.
function App() {
  return (
    <div className="login-fondo">
      {/* Capa de imagen desenfocada (detrás del contenido). */}
      <div className="login-fondo-imagen" style={estiloFondo} aria-hidden="true" />

      {/* Grilla responsiva de Bootstrap: container > row > col-* */}
      <div className="login-contenido container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <Logo />
            <FormularioRegistro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
