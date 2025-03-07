import React, { useState, useEffect } from "react";
import BarraBusqueda from "./componentes/BarraBusqueda";
import Resultados from "./componentes/Resultados";
import HistorialBusqueda from "./componentes/HistorialBusqueda";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Si no hay término de búsqueda, se limpian resultados y error.
    if (searchTerm.trim() === "") {
      setCountries([]);
      setError(null);
      return;
    }

    const controller = new AbortController();

    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchTerm}`,
          {
            signal: controller.signal,
          }
        );
        if (!response.ok) {
          throw new Error("No se encontraron resultados");
        }
        const data = await response.json();
        setCountries(data);
        setError(null);

        // Actualiza el historial sin duplicados y manteniendo un máximo de 5 búsquedas
        setSearchHistory((prevHistory) => {
          const nuevoTermino = searchTerm.trim();
          const historialActualizado = prevHistory.filter(
            (item) => item.toLowerCase() !== nuevoTermino.toLowerCase()
          );
          historialActualizado.unshift(nuevoTermino);
          return historialActualizado.slice(0, 5);
        });
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setCountries([]);
      }
    };

    // Se usa debounce para evitar llamadas excesivas a la API
    const debounceTimeout = setTimeout(() => {
      fetchCountries();
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
      controller.abort();
    };
  }, [searchTerm]);

  return (
    <div style={styles.contenedor}>
      <h1 style={styles.titulo}>Buscador de Países</h1>
      <BarraBusqueda
        searchTerm={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Resultados countries={countries} error={error} />
      <HistorialBusqueda searchHistory={searchHistory} />
    </div>
  );
}

const styles = {
  contenedor: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    marginBottom: "20px",
  },
};

export default App;
