import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import Task from './Task'

const ListTasks = ({tasks}) => {
  return (
   <ul className="lista-tareas">
       { 
     /*   En caso de que tasks sea mayor que cero, mostrará en pantalla*/
        tasks.length > 0 
        ?
        tasks.map((task)=>{
          /* Por un código más modular, cree {Task} por separado y lo llamo acá */
         return  <Task   
                    /* agregamos el prop tasks para usarlo como variable en task.js */
                   task={task}
                   key={task.id}>
                </Task>
        })
        /*   En caso contrario, mostrará en pantalla lo siguiente*/
        :
       <div className="lista-tareas__mensaje">
                 Don't have Tasks  
               <span style={{marginLeft: '10px'}}> 
                <FontAwesomeIcon icon={faPlusSquare} /> 
              </span> 
        </div>
       }

   </ul>
  )
}

export default ListTasks
