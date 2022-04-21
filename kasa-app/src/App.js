import {Routes, Route } from "react-router-dom";
import React from 'react'

import Home from './pages/Home';
import About from "./pages/About";

import './scss/App.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/404";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/accommodation' element={<Accommodation />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
