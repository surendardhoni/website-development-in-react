import React from 'react'
import "./Banner.css"
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='star'><h1 style={{color:'white'}}>Source Our Active IT Jobseekers</h1>
    {/* <span className='tamil'>Hire Our Candidates</span> */}
    < Link to="/Home"  className='tamil'>Hire Our candidate</Link>

    </div>
  )
}

export default Banner