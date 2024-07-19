import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';

import Home from './components/Home';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

import { FaHome, FaBars, FaBullseye } from "react-icons/fa";
import './App.css'

function App() {
  
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <>
    <Router>
      <Sidebar backgroundColor="#fff" onBackdropClick={()=> setToggled(false)} toggled={toggled} breakPoint="all">
        <Menu>
          <NavLink to='/' onClick={()=>setToggled(false)}><MenuItem><FaHome/> Home</MenuItem></NavLink>
          <NavLink to='/component1' onClick={()=>setToggled(false)}><MenuItem><FaBullseye/> Component 1</MenuItem></NavLink> 
          <NavLink to='/component2' onClick={()=>setToggled(false)}><MenuItem><FaBullseye/> Component 2</MenuItem></NavLink>
        </Menu>
      </Sidebar>
      <div className="header">
        <button onClick={()=> setToggled(!toggled)}><FaBars/></button>
        <h1>App</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/component1' element={<Component1></Component1>}/>
        <Route path='/component2' element={<Component2></Component2>}/>
      </Routes>
    
    </Router>
      
    </>
  )
}

export default App
