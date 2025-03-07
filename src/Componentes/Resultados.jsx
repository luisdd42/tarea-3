import React from "react";

const Resultados = ({ countries, error }) => {
  return (
    <div style={styles.seccionResultados}>
      <h2>Resultado:</h2>
      {error ? (
        <p>{error}</p>
      ) : countries.length > 0 ? (
        countries.map((country, index) => (
          <div key={index} style={styles.tarjetaPais}>
            <h3>{country.name?.official}</h3>
            <p>
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital[0] : "No disponible"}
            </p>
            <p>
              <strong>Población:</strong> {country.population.toLocaleString()}
            </p>
            {country.flags && (
              <img
                src={country.flags.png}
                alt={`Bandera de ${country.name?.official}`}
                style={styles.bandera}
              />
            )}
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

const styles = {
  seccionResultados: {
    marginBottom: "20px",
    textAlign: "left",
  },
  tarjetaPais: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  },
  bandera: {
    width: "100px",
    marginTop: "10px",
  },
};

export default Resultados;
