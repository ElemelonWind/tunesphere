import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Recommend } from './components/Recommend';
import { Profile } from './components/Profile';

function App() {

  return (
    <div className="body">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

export default App;
