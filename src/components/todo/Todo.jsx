import Swal from "sweetalert2";
import { nanoid } from "nanoid";

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      return Swal.fire(
        "Alert!",
        "No se puede agregar una tarea sin nombre",
        "alert"
      );
    }

    setTodos([...todos, { id: nanoid(), content: todo }]);
    setTodo("");
  };

  const getTodo = (item) => {
    setEdit(true);
    setTodo(item.content);
    setId(item.id);
    document.getElementById("todo").focus();
  };

  const updateTodo = (e) => {
    e.preventDefault();

    const updated = todos.map((item) =>
      item.id === id ? { id, content: todo } : item
    );
    setTodos(updated);
    setEdit(false);
    setTodo("");
    setId("");
  };

  const removeTodo = (id) => {
    const filterList = todos.filter((item) => item.id !== id);
    setTodos(filterList);
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center">CRUD Simple</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de todos</h4>
          <ul className="list-group">
            {todos.length > 0 ? (
              todos.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.content}</span>
                  <button
                    className="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => removeTodo(item.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-end"
                    onClick={() => getTodo(item)}
                  >
                    Editar
                  </button>
                </li>
              ))
            ) : (
              <h3>No hay tareas</h3>
            )}
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">{edit ? "Edit todo" : "Add todo"}</h4>
          <form onSubmit={edit ? updateTodo : addTodo}>
            <input
              type="text"
              id="todo"
              name="todo"
              placeholder="todo"
              className="form-control mb-3"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
            {edit ? (
              <button className="btn btn-warning form-control" type="submit">
                Edit
              </button>
            ) : (
              <button className="btn btn-success form-control" type="submit">
                Save
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
