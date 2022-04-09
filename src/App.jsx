import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Form_1} from "./page/Form1"
import {Form2} from "./page/Form2"
import  {User} from "./page/User"





function App() {

  return (
    <div >
      <Routes>
        <Route  path='/register/one' element={<Form_1/>}></Route>
        <Route  path='/register/two' element={<Form2/>}></Route>
         <Route  path='/user' element={<User/>}></Route>
      </Routes>
    </div>
  )
}

export default App
