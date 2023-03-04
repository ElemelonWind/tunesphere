import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div className="body">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
