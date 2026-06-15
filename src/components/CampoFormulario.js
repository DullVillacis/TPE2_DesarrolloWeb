import React from "react";

// Iconos en SVG que se muestran dentro de cada input.
const ICONOS = {
  usuario: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    </svg>
  ),
  correo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  candado: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
};

// Campo reutilizable: input tipo "píldora" con un icono a la izquierda.
// La etiqueta se mantiene para accesibilidad, pero se oculta visualmente
// (visually-hidden) porque el diseño usa solo el placeholder.
// El mensaje de error aparece debajo cuando existe.
function CampoFormulario({
  id,
  etiqueta,
  tipo = "text",
  valor,
  placeholder,
  error,
  onChange,
  icono,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="visually-hidden">
        {etiqueta}
      </label>

      <div className="campo-icono">
        {icono && <span className="icono">{ICONOS[icono]}</span>}
        <input
          type={tipo}
          id={id}
          name={id}
          className={`form-control ${icono ? "con-icono" : ""} ${
            error ? "is-invalid" : ""
          }`}
          value={valor}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
        />
      </div>

      {/* d-block fuerza que el mensaje se muestre aunque el input esté
          envuelto (Bootstrap solo lo muestra si es hermano directo). */}
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}

export default CampoFormulario;
