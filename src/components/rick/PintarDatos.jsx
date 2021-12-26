import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import Personaje from "./Personaje";

const PintarDatos = ({ personaje }) => {
  useEffect(() => {
    getData(personaje);
  }, [personaje]);

  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (nombre) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
    try {
      setLoading(true);
      const res = await fetch(url);

      if (!res.ok)
        return Swal.fire("Error", "No se encontró el personaje", "error");

      const data = await res.json();
      setPersonajes(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {personajes.map((personaje) => (
        <Personaje key={personaje.id} data={personaje} />
      ))}
    </div>
  );
};

export default PintarDatos;
