import { nanoid } from 'nanoid'
import { useState } from 'react';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [todo, setTodo] = useState('');
  const [edit, setEdit] = useState(false);  
  const [id, setId] = useState('');  
  
  const addTodo = (e) => {        
      e.preventDefault()
      if(!todo.trim()){            
          setError('write something please')            
          return;
      }
      
      setTodos([...todos, {id: nanoid(), content: todo}]);
      setError('')
      setTodo('')                                       
  }

  const getTodo = item => {
    setEdit(true);
    setTodo(item.content)
    setId(item.id)
    document.getElementById('todo').focus()
  }

  const updateTodo = e => {
    e.preventDefault()
    if(!todo.trim()){            
      setError('write something please')            
      return;
    }

    const updated = todos.map(item => item.id === id ? {id, content: todo} : item)
    setTodos(updated)
    setEdit(false)
    setTodo('')
    setId('')
    
  }

  const removeTodo = (id) =>{
    const filterList = todos.filter(item => item.id !== id)
    setTodos(filterList)
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">CRUD Simple</h1>
      <div className="row">

        <div className="col-8">
          <h4 className="text-center">Lista de todos</h4>
          <ul className="list-group">
            {
              todos.length > 0 
                ? todos.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.content}</span>              
                    <button 
                      className="btn btn-danger btn-sm float-end mx-2" 
                      onClick={()=> removeTodo(item.id)}
                    >Eliminar</button>              
                    <button 
                      className="btn btn-warning btn-sm float-end"
                      onClick={()=> getTodo(item)}  
                    >Editar</button>              
                  </li>
                ))
                : <h3>No hay tareas</h3>
            }
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">{edit ? 'Edit todo' : 'Add todo'}</h4>            
          <span className="text-danger">{error}</span>
            <form onSubmit={edit ? updateTodo : addTodo}>
                <input                     
                    type="text" 
                    id='todo'
                    name="todo" 
                    placeholder='todo'
                    className='form-control mb-3'
                    onChange={e => {
                      setTodo(e.target.value); 
                      setError(false);
                    }} 
                    value={todo}
                    />
                {
                  edit 
                  ? <button className='btn btn-warning form-control' type="submit">Edit</button>
                  : <button className='btn btn-block form-control' type="submit">Save</button>
                }
            </form>      
        </div>
      </div>      
    </div>
  );
}

/* 
  <hr />
  <ul className="container mt-8">
      {
          frutas.length > 0 
          ? frutas.map((item, i)=>(
              <li key={i}>{item.fruta} - {item.description}</li>
            ))
          : <h3>Agrega frutas</h3>
      }
  </ul>
*/

export default App;
