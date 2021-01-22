import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTasks, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4} from 'uuid'

const FormTasks = ({tasks, changeTasks}) => {
  //Estado de input, 
  //inputTask asignado vació en useState('') 
  //ChangeInputTask funcion de cambio del input
  const [inputTask, changeInputTask] = useState('')

  const handleInput = (e) =>{
      //Onchage, le asiganmos el e.target.value al la variable {inputTask}
      changeInputTask(e.target.value)
  }

  const handleSubmit = (e) =>{
    //eventp de prevent Default 
    e.preventDefault()
  //Tomamos la funcion {changeTasks} para reasignar nuevo valor a {tasks}
      inputTask == ''      
      ?
       alert("Please add one task, input is empty")
      :
    changeTasks(
      //Tomamos el array inicial, el nuevo estado  y adicionamos un objeto y sus keys id,text,completed
       [...tasks, 
          { 
            //usamos la librería uuidv4 para asignar id dinamico
           id: uuidv4() , 
           //Asignamos el valor e.target.value que ahora es de la variable {inputTask}
           text: inputTask, 
           completed: false      
          }     
        ]
    )

    //Al agregar colocamos vacio el campo
    changeInputTask('')     
    
   
  }

  return (
    <form action="" className="form-tasks" onSubmit={handleSubmit}>
        <input 
          type="text"    
          className="form-tasks__input"
          placeholder="Write a task" 
          value={inputTask}
          onChange={(e)=> handleInput(e)}
        />

          <button 
          type="submit"
          className="form-tasks__btn">
           <FontAwesomeIcon 
              icon={faPlusSquare} 
              className="form-tasks__icon-btn">

           </FontAwesomeIcon>
          </button>

    </form>
  )
}

export default FormTasks
