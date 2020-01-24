import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderComponent.scss'

class HeaderComponent extends Component {
  render () {
    return (
      <div className='nav'>
        <NavLink className='navbar-brand' to='/home'>Home</NavLink>
        <NavLink className='navbar-brand' to='/'>Logout</NavLink>
      </div>
    )
  }
}

export default HeaderComponent
