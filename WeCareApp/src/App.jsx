import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CoachSignUp from './components/coach/CoachSignUp'
import CoachLogin from './components/coach/CoachLogin'
import UserSignUp from './components/user/UserSignUp'
import UserLogin from './components/user/UserLogin'

function App() {
  return (
    <BrowserRouter >
    <div className='app-container'>
      <header><NavBar /></header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coach-signup' element={<CoachSignUp />}/>
        <Route path='/coach-login' element={<CoachLogin />}/>
        <Route path='/user-signup' element={<UserSignUp />}/>
        <Route path='/user-login' element={<UserLogin />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    
  )
}

export default App