import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Recommend } from './components/Recommend';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="body">
        <Routes>
          <Route path="/" element={<Home token={token} setToken={setToken}/>} /> 
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend token={token} />} />

        </Routes>
      </div>
  );
}

export default App;
