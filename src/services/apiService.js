import users from '../users.json'
import holidays from '../holidays.json'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

let success = false
export default class apiService {
  static login (currentUser) {
    return new Promise((resolve, reject) => {
      users.forEach((user) => {
        if (user.userName === currentUser.userName && user.password === currentUser.password) {
          success = true
        }
      })
      if (success) {
        console.log(111111, success)
        setTimeout(() => { resolve(currentUser) }, 700)
      } else {
        setTimeout(() => { reject(new Error(401)) }, 700)
      }
    })
  }

  static display () {
    return holidays
  }
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (success) {
          return <Component {...props} />
        } else {
          return <Redirect to='/' />
        }
      }}
    />
  )
}
