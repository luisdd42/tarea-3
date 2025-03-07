import React from "react";

const BarraBusqueda = ({ searchTerm, onChange }) => {
  return (
    <div>
      <label htmlFor="busqueda">Buscar Países:</label>
      <input
        type="text"
        id="busqueda"
        placeholder="Ingrese el nombre del país"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};

export default BarraBusqueda;
