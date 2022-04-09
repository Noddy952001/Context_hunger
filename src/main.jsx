import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RegistrationContextProvider} from "./context/context_register"
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <RegistrationContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
 </RegistrationContextProvider>,
  document.getElementById('root')
)
