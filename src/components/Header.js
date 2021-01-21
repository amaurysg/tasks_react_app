import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
      <header className="header">
          <h1 className="header__title">Tasks List</h1>
          <button className="header__button">
            Hide completed tasks
            <FontAwesomeIcon icon={faEye} className="header__icon-button"/>
          </button>

      </header>
  )
}

export default Header


