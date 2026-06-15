import React, { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import {
  validarNombre,
  validarCorreo,
  validarContrasena,
} from "../utils/validaciones";

function FormularioRegistro() {
  // Sesión 3: useState para controlar los valores de cada input.
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
  });

  // Estado para los mensajes de error de cada campo.
  const [errores, setErrores] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
  });

  // Estado para mostrar el mensaje de éxito tras un envío válido.
  const [enviado, setEnviado] = useState(false);

  // Ejecuta la validación que corresponde a cada campo.
  const validarCampo = (campo, valor) => {
    switch (campo) {
      case "nombre":
        return validarNombre(valor);
      case "correo":
        return validarCorreo(valor);
      case "contrasena":
        return validarContrasena(valor);
      default:
        return "";
    }
  };

  // Maneja los cambios de los inputs y valida EN TIEMPO REAL:
  // cada vez que el usuario escribe se vuelve a calcular el error del campo.
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
    setErrores((anterior) => ({ ...anterior, [name]: validarCampo(name, value) }));
    setEnviado(false);
  };

  // Maneja el envío: valida todos los campos a la vez antes de aceptar.
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevosErrores = {
      nombre: validarNombre(datos.nombre),
      correo: validarCorreo(datos.correo),
      contrasena: validarContrasena(datos.contrasena),
    };
    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some((msg) => msg !== "");
    if (!hayErrores) {
      setEnviado(true);
      // En un proyecto real, aquí se enviarían los datos a una API.
      console.log("Datos enviados:", datos);
    }
  };

  return (
    <div className="form-registro">
      {/* noValidate desactiva la validación nativa del navegador para
          usar la nuestra basada en React. */}
      <form onSubmit={manejarEnvio} noValidate>
        <CampoFormulario
          id="nombre"
          etiqueta="Nombre"
          tipo="text"
          icono="usuario"
          valor={datos.nombre}
          placeholder="Tu nombre"
          error={errores.nombre}
          onChange={manejarCambio}
        />

        <CampoFormulario
          id="correo"
          etiqueta="Correo electrónico"
          tipo="email"
          icono="correo"
          valor={datos.correo}
          placeholder="Tu correo electrónico"
          error={errores.correo}
          onChange={manejarCambio}
        />

        <CampoFormulario
          id="contrasena"
          etiqueta="Contraseña"
          tipo="password"
          icono="candado"
          valor={datos.contrasena}
          placeholder="Tu contraseña"
          error={errores.contrasena}
          onChange={manejarCambio}
        />

        <button type="submit" className="btn btn-comenzar w-100 mt-2">
          Registrarse
        </button>
      </form>

      {/* Mensaje de éxito tras un envío correcto. */}
      {enviado && (
        <div className="mensaje-exito mt-3">¡Registro completado con éxito! 🎉</div>
      )}

      {/* Enlaces inferiores, al estilo del diseño de referencia. */}
      <div className="form-enlaces">
        <a href="#!" className="enlace-suave">
          Iniciar sesión
        </a>
        <a href="#!" className="enlace-suave">
          ¿Necesitas ayuda?
        </a>
      </div>
    </div>
  );
}

export default FormularioRegistro;
