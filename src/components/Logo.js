import React from "react";

// Logotipo: marca geométrica minimalista = anillo abierto (con un hueco),
// sin punto central. Trazo blanco; se escala con la clase .logo-svg.
function Logo() {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      role="img"
      aria-label="Logotipo"
    >
      {/* Anillo de ~300° con el hueco en la parte superior. */}
      <g transform="rotate(35 12 12)">
        <path d="M16.5 4.2 A9 9 0 1 1 7.5 4.2" />
      </g>
    </svg>
  );
}

export default Logo;
