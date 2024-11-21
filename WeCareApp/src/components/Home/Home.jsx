import React from 'react'
import './Home.css'
import Manager from'../../assets/manager.svg'
import Users from'../../assets/users.svg'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
        <h1>We are at the heart of appropriate care</h1>
        <div className='card-container'>
        <div className="card">
            <img src={Manager} alt="Icon to represent coach" />
            <button onClick={()=>navigate('/coach-login')}>Login as a Coach</button>
            <button onClick={()=>navigate('/coach-signup')}>Join as a Coach</button>
        </div>
        <div className="card">
            <img src={Users} alt="Icon to represent User" />
            <button onClick={()=>navigate('/user-login')}>Login as a User</button>
            <button onClick={()=>navigate('/user-signup')}>Join as a User</button>
        </div>
        </div>
    </div>
  )
}

export default Home