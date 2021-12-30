import React from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import styles from './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {

  return (
    
    <Router>
      
      <Routes>
      
        <Route path="/" element={<Home/>} />

        <Route path="/projects" element={<Projects/>} />

      </Routes>
    </Router>
    
  ); 
};

export default App;
