import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Recommend } from './components/Recommend';
import { Profile } from './components/Profile';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="body">
        {page === 0 && <Home setPage={setPage} />}
        {page === 1 && <About setPage={setPage} />}
        {page === 2 && <Recommend setPage={setPage} />}
        {page === 3 && <Profile setPage={setPage} />}
      </div>
  );
}

export default App;
