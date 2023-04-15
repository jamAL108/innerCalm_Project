import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import Nav from './components/Nav';
import './App.css';
import Home from './Pages/Home';
import Community from './Pages/Community';
import Education from './Pages/Education';
import Music from './Pages/Music';
import Contact from './Pages/Contact';
import Helplines from './Pages/Helplines';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/community' element={<Community />} />
        <Route path='/education' element={<Education />} />
        <Route path='/music' element={<Music />} />
        <Route path='/helplines' element={<Helplines />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
