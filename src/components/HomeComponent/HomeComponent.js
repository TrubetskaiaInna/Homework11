import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeComponent.scss'

const HomeComponent = (props) => {
  return (
    <div className='wrapperHomeComponent'>
      <div className='wrapperWelcome'>
        Hello, {props.user.userName}
      </div>

      <header>
        <div className='wrapperLinc'><NavLink className='linc' to='/about'>About</NavLink></div>
        <div className='wrapperLinc'><NavLink className='linc' to='/photo'>Photo gallery</NavLink></div>
      </header>
      <section>
        <span className='HomeComponentText'>
             Want unforgettable holiday
             for your children? <br /> We`ll be happy to help you with this!</span>
      </section>
    </div>
  )
}

export default HomeComponent
