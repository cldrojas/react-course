import { useState } from "react";

import Form from "../rick/Form";
import PintarDatos from "./PintarDatos";

function Rick() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <Form setNombre={setNombre} />
      <button
        className="btn btn-success btn-block mt-2"
        onClick={() => setNombre("")}
      >
        Reset
      </button>
      <PintarDatos personaje={nombre} />
    </div>
  );
}

export default Rick;
