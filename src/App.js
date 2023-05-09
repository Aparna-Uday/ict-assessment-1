import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';


 const App=()=> {
  return (
    
    <BrowserRouter>
    <div>
      <NavBar/>
    <Routes>
    <Route path="/home" element={<Dashboard /> }></Route>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/addblog" element={<Add />}></Route>
    </Routes>
    </div>
    </BrowserRouter> 
    
  );
}

export default App;
