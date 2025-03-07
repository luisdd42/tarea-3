import React from "react";

const HistorialBusqueda = ({ searchHistory }) => {
  return (
    <div style={styles.seccionHistorial}>
      <h2>Historial de Búsquedas:</h2>
      <ul style={styles.listaHistorial}>
        {searchHistory.map((termino, index) => (
          <li key={index} style={styles.itemHistorial}>
            {termino}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  seccionHistorial: {
    textAlign: "left",
  },
  listaHistorial: {
    listStyleType: "none",
    padding: 0,
  },
  itemHistorial: {
    backgroundColor: "#f0f0f0",
    padding: "5px",
    marginBottom: "5px",
  },
};

export default HistorialBusqueda;
