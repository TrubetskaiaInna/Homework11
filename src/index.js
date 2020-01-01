import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'

const { store, persistor } = configureStore()

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
