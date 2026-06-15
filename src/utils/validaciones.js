// Sesión 3: funciones de validación reutilizables.
// Cada función recibe el valor del campo y devuelve un mensaje de error
// (string). Si el valor es válido, devuelve una cadena vacía "".

// Valida el nombre:
//  - obligatorio
//  - solo letras y espacios (admite tildes y ñ)
//  - al menos 3 caracteres
export function validarNombre(nombre) {
  const valor = nombre.trim();
  if (valor === "") {
    return "El nombre es obligatorio.";
  }
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  if (!soloLetras.test(valor)) {
    return "El nombre solo puede contener letras y espacios.";
  }
  if (valor.length < 3) {
    return "El nombre debe tener al menos 3 caracteres.";
  }
  return "";
}

// Valida el correo:
//  - obligatorio
//  - formato válido: usuario@dominio.tld (con un TLD de al menos 2 letras)
export function validarCorreo(correo) {
  const valor = correo.trim();
  if (valor === "") {
    return "El correo es obligatorio.";
  }
  const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!formatoCorreo.test(valor)) {
    return "Ingresa un correo electrónico válido (ejemplo@correo.com).";
  }
  return "";
}

// Valida la contraseña (validación más completa):
//  - obligatoria
//  - mínimo 8 caracteres
//  - al menos una letra minúscula, una mayúscula y un número
export function validarContrasena(contrasena) {
  if (contrasena === "") {
    return "La contraseña es obligatoria.";
  }
  if (contrasena.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }
  if (!/[a-z]/.test(contrasena)) {
    return "La contraseña debe incluir al menos una letra minúscula.";
  }
  if (!/[A-Z]/.test(contrasena)) {
    return "La contraseña debe incluir al menos una letra mayúscula.";
  }
  if (!/[0-9]/.test(contrasena)) {
    return "La contraseña debe incluir al menos un número.";
  }
  return "";
}
