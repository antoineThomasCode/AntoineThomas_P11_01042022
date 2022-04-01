import {Routes, Route } from "react-router-dom";
import React from 'react'

import Home from './pages/Home';
import About from "./pages/About";
import './App.scss';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />}/>
          
        </Routes>

      </div>
  );
}

export default App;
