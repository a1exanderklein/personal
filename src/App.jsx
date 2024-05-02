import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TitleCard from './components/TitleCard';
import Info from './screens/Info';
import Contact from './screens/Contact';
import Experience from './screens/Experience';
import Projects from './screens/Projects';
import Leadership from './screens/Leadership';


function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleCard/>}/>
      <Route path="/info" element={<Info/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/leadership" element={<Leadership/>}/>
    </Routes>
  );
}

export default App;
