import React from 'react'
import Navbar from './components/Navbar'
import Banner from './pages/Home/components/Banner'
import Cart from './pages/Home/components/Cart'
const Main = () => {
  return (
    <div>
      <Navbar />
        <Banner />
        <Cart />
    </div>
  )
}

export default Main