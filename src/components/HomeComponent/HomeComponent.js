import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './HomeComponent.scss'

class HomeComponent extends Component {
  constructor (props) {
    super(props)
    console.log('props', props)
  }

  render () {
    return (
      <div className='wrapperHomeComponent'>
        <div className='wrapperWelcome'>
          Hello, {this.props.user.userName}
        </div>

        <header>
          <div className='wrapperLinc'><NavLink className='linc' to='/about'>About</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/photo'>Photo gallery</NavLink></div>
        </header>
        <section>
          <span>
             If you want to unforgettably organize a holiday
             for your children, we will be happy to help you with this</span>
        </section>
      </div>
    )
  }
}

export default HomeComponent
