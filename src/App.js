import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponentContainer'
import LoginComponent from './components/LoginComponent/LoginComponentContainer'
import AboutComponent from './components/AboutComponent/AboutComponentContainer'
import ReactSlickDemo from './components/CarouselComponent/CarouselComponent'
import { ProtectedRoute } from './services/protectedRoute'

function App () {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginComponent} />
          <ProtectedRoute path='/home' component={HomeComponent} />
          <ProtectedRoute path='/about' component={AboutComponent} />
          <ProtectedRoute path='/photo' component={ReactSlickDemo} />
          <Route path='*' component={() => '404 NOT FOUND'} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
