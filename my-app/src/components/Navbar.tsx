import React from 'react'
import './Navbar/Navbar.css'
import logo from "../Images/sure.png"
import { Link } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Navbar = () => {
  return (
    <div className='style'>
       <div>
         <img src={logo}></img>
       </div>

        {/* <a className='align' href='hire'>Hire Our candidate</a> */}
        < Link to="/Home"  className='align'>Hire Our candidate</Link>
    </div>
  )
}

export default Navbar