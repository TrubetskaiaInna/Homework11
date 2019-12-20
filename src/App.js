import React from 'react'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginComponent}/>
          <Route path='/home' component={HomeComponent}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
