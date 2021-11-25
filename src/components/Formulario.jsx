import React, { useState} from 'react'
import { nanoid } from 'nanoid'

const Formulario = () => {    

    const [tareas, setTareas] = useState([]);
    const [error, setError] = useState('');
    const [ tarea, setTarea] = useState('');

    const prevent = (e) => {        
        e.preventDefault()
        if(!tarea.trim()){            
            setError('Por favor ingrese texto')            
            return;
        }
        
        setTareas([...tareas, {id: nanoid(), tarea}]);
        setError('')
        setTarea('')                                 
        console.log(tareas);
    }
    
    return (
        <>            
            <span className="error">{error}</span>
            <form onSubmit={prevent}>
                <input                     
                    type="text" 
                    name="tarea" 
                    placeholder='Tarea'
                    className='form-control mb-3'
                    onChange={e => setTarea(e.target.value)} 
                    value={tarea}
                    />
                <button className='btn btn-primary form-control' type="submit">Guardar</button>
            </form>
        </>
    )
}

export default Formulario
