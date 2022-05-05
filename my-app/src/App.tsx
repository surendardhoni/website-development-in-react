import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Main from './Main';
import Submit from './Submit';
// import Cart from './pages/Home/components/Cart';
// import Banner from './pages/Home/components/Banner';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      {/* <Navbar / */}
      
      {/* <Banner />
      <Cart /> */}
      <Routes>
        <Route path ='/' element={<Main/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path ='/Submit' element = {<Submit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
