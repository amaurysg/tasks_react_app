import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'



const Header = ({showCompleted, changeShowCompleted}) => {

  const toogleCompletedTaks = ()=>{
    changeShowCompleted(!showCompleted)
  }

  return (
      <header className="header">
          <h1 className="header__title">Tasks List</h1>
          
            { showCompleted ? 

              <button className="header__button"
                      onClick={()=> toogleCompletedTaks()}
              >
               Hide completed tasks
             <FontAwesomeIcon icon={faEyeSlash}
              className="header__icon-button"   style={{marginLeft: '5px'}}/>
             </button>


              :

              
              <button className="header__button"
                      onClick={()=> toogleCompletedTaks()}
              >
               Hide completed tasks
             <FontAwesomeIcon icon={faEye}
               className="header__icon-button"  style={{marginLeft: '5px'}} />
             </button>



            }
       
        
        

      </header>
  )
}

export default Header


