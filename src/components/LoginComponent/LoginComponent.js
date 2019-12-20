import React, { Component } from 'react'
import './LoginComponent.scss'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'

class LoginComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      hardName: 'Inna',
      password: '',
      hardPassword: '111',
      loggedIn: false
    }
  }

  onLabelChange = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {
      userName,
      password,
      hardName,
      hardPassword
    } = this.state

    if (userName === hardName && password === hardPassword) {
      this.setState({
        loggedIn: true
      })
    }

    this.setState({
      userName: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='wrapperForm'>
        <form
          onSubmit={this.onSubmit}>
          <label>

            <div className='userName'>
              <input
                name="userName"
                className='inputUserName'
                value={this.state.userName}
                type="text"
                onChange={this.onLabelChange}
                placeholder='Enter user name'/>
            </div>

            <div className='password'>
              <input className='inputPassword'
                     type="password"
                     value={this.state.password}
                     name="password"
                     onChange={this.onLabelChange}
                     placeholder='Enter password'/>
            </div>

          </label>
          <Route exact path="/">
            {this.state.loggedIn ? <Redirect from='/' to="/home"/> : null}
          <div className='wrapperButton'>
            <button className='btn btn-warning'>Login</button>
          </div>
          </Route>
        </form>
      </div>
    )
  }
}

export default LoginComponent
