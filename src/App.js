import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import FormTasks from './components/FormTasks'
import ListTasks from './components/ListTasks'
//Importamos estilos generales
import  styles from './App.css'



const App=() =>{

  //Agregamos estados

  //Llamamos el elemento task que definimos en el local storage
  const tasksSave  =  localStorage.getItem('tasks') ? 
                      JSON.parse(localStorage.getItem('tasks'))
                      :
                      []
  console.log(tasksSave)


  const [tasks, changeTasks] = useState(tasksSave)
   /*  [
        {id:1,
         text: 'Estudiar',
         completed: false,        
        },
        {id:2,
         text: 'Jugarr',
         completed: false,        
        },
        
    ] */
    
    //Guardamos el estado dentro de local storage
    useEffect(() => {
     
      localStorage.setItem('tasks', JSON.stringify(tasks) )
      
    }, [tasks])
    
    //Accedemos a localStorage y miramos si hay algún vakor null 
    let configShowCompleted = ''
      if (localStorage.getItem('completed') === null){
        configShowCompleted = true
    } else {
      configShowCompleted = localStorage.getItem('completed') === 'true'
    }

  //Estado de mostrar tareas completadas 
    const [showCompleted, changeShowCompleted] = useState(configShowCompleted)
    
        useEffect(() => {
          localStorage.setItem('completed', showCompleted.toString() )    
          }, [showCompleted])




  
  
  console.log(tasks)

  return (
    <div className="contenedor">
      {/* Agregamos Header */}
      <Header  showCompleted={showCompleted} 
               changeShowCompleted={changeShowCompleted} />
      
      {/* Agregamos FormTasks */}
      <FormTasks tasks={tasks} changeTasks={changeTasks} />

      {/* Agregamos ListTasks */}
      <ListTasks tasks={tasks} 
                 changeTasks={changeTasks} 
                 showCompleted={showCompleted} />    
    </div>
  );
}

export default App;

