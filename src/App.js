import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Recommend } from './components/Recommend';
import { useState } from 'react';

function App() {

  return (
    <div className="body">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} />

        </Routes>
      </div>
  );
}

export default App;
