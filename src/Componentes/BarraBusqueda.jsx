import React from "react";

const BarraBusqueda = ({ searchTerm, onChange }) => {
  return (
    <div style={styles.seccionBusqueda}>
      <label htmlFor="busqueda" style={styles.etiqueta}>
        Buscar Países:
      </label>
      <input
        type="text"
        id="busqueda"
        placeholder="Ingrese el nombre del país"
        value={searchTerm}
        onChange={onChange}
        style={styles.entrada}
      />
    </div>
  );
};

const styles = {
  seccionBusqueda: {
    marginBottom: "20px",
  },
  etiqueta: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  entrada: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
  },
};

export default BarraBusqueda;
