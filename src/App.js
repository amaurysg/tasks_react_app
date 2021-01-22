import React, {useState} from 'react'
import Header from './components/Header'
import FormTasks from './components/FormTasks'
import ListTasks from './components/ListTasks'
//Importamos estilos generales
import  styles from './App.css'



const App=() =>{

  //Agregamos estados
  const [tasks, changeTasks] = useState(
    [
       /*  {id:1,
         text: 'Estudiar',
         completed: true,        
        },
        {id:2,
         text: 'Jugarr',
         completed: true,        
        }, */
        
    ]
  )

  console.log(tasks)

  return (
    <div className="contenedor">
      {/* Agregamos Header */}
      <Header/>
      
      {/* Agregamos FormTasks */}
      <FormTasks tasks={tasks} changeTasks={changeTasks} />

      {/* Agregamos ListTasks */}
      <ListTasks tasks={tasks} changeTasks={changeTasks} > ListTasks</ListTasks>
    
    </div>
  );
}

export default App;

