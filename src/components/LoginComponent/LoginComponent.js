import React, { Component } from 'react'
import './LoginComponent.scss'
import apiService from '../../services/apiService'
import MessageComponent from '../MessageComponent/MessageComponent'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent'

class LoginComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      showMessage: false,
      showSpinner: false,
      validInput: false
    }
  }

  componentDidMount () {
    window.localStorage.setItem('success', 'false')
  }

  onLabelChange = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ showSpinner: true })
    const { userName, password, } = this.state
    apiService.login({ userName, password })
      .then(() => {
        this.props.setUser({ userName, password })
        this.props.history.push('/home')
      }).catch(() => {
      this.setState({
        userName: '',
        password: '',
        showMessage: true,
        showSpinner: false,
        validInput: true
      })
    })
  }

  render () {
    return (
      <>
        {this.state.showSpinner ? <SpinnerComponent/> :
          <div className='wrapperForm'>
            <form
              onSubmit={this.onSubmit}>
              <label>
                <div className='userName'>
                  <input name="userName"
                         className={this.state.validInput ? 'inputUserNameValid' : 'inputUserName'}
                         value={this.state.userName}
                         type="text"
                         onChange={this.onLabelChange}
                         placeholder='Enter user name'
                  />
                </div>

                <div className='password'>
                  <input name="password"
                         className={this.state.validInput ? 'inputPasswordValid' : 'inputPassword'}
                         type="password"
                         value={this.state.password}
                         onChange={this.onLabelChange}
                         placeholder='Enter password'/>
                </div>
              </label>

              <div className='wrapperButton'>
                <button className='btn btn-warning'>Login</button>
              </div>
            </form>

            {this.state.showMessage ? <MessageComponent/> : null}
          </div>
        }
      </>
    )
  }
}

export default LoginComponent
