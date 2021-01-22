import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

const Tasks = ({task, toogleCompleted, editTaskValue, deleteTask}) => {
  
  //Agregamos el estado de editTask
  const [editTask, changeEditTask] = useState(false)
  //Agregamos el estado de newTask, valor por defecto será task.text

  const [newTask, changeNewTask] = useState(task.text)

  const handleSubmit = (e) =>{
    e.preventDefault()
    editTaskValue(task.id, newTask)
    changeEditTask(false)

  }
  
  
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon 
          icon={task.completed ? faCheckSquare : faSquare} 
          className="lista-tareas__icono lista-tareas__icono-check"
          onClick={()=>toogleCompleted(task.id)}
      />
      <div className="lista-tareas__texto">
              {
                editTask ? 
                <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>

                  <input
                   type="text"
                   className="formulario-editar-tarea__input"
                   value={newTask}
                   onChange={(e)=>changeNewTask(e.target.value)}
                  
                   />
                   <button
                   type='submit'
                   className="formulario-editar-tarea__btn"                 
                   >
                    Update
                   </button>
                </form>
                :
                task.text
              }
      </div>   
      <div  
       className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon 
          icon={faEdit} 
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={()=>changeEditTask(!editTask)}
     />
      <FontAwesomeIcon 
         
          icon={faTimes} 
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={()=> deleteTask(task.id) }
      />

      </div>

    </li>
  )
}

export default Tasks
