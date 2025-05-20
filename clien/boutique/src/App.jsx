import { Routes, Route, Link } from 'react-router-dom';
import Famme from './components/Famme.jsx';
import Homme from './components/Homme.jsx';
import Home from './components/Home.jsx';
import Search from './components/serch.jsx';
import './App.css';


function App() {
  return (
    <>
      <nav style={{ padding: '1rem', position: 'fixed', background: '#ddd', top: 0, width: '100%' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/homme">Homme</Link> |{' '}
        <Link to="/famme">Famme</Link> |{' '}
        <Link to="/search">Search</Link>
      </nav>

      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/famme" element={<Famme />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
