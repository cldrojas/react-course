import Swal from "sweetalert2";
import { useFormulario } from "../../hooks/useFormulario";

const Form = ({ setNombre }) => {
  const [inputs, handleChange, reset] = useFormulario({ nombre: "" });
  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      return Swal.fire(
        "Alert!",
        "No se puede buscar un personaje sin nombre",
        "warning"
      );
    }
    setNombre(nombre.trim().toLowerCase());
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={nombre}
        onChange={handleChange}
      />
      <button className="btn btn-dark btn-block">Buscar</button>
    </form>
  );
};

export default Form;
