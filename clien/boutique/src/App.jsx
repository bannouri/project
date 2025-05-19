import { Routes,Route,Link } from 'react-router-dom'
import Famme from './componend/Famme.jsx'
import Homme from "./componend/Homme.jsx"
import Home from "./componend/Home.jsx"
import Search from './componend/Serch.jsx'
import './App.css'
import Homme from '../../../server/models/Homme.js'
import Famme from '../'

function App() {

  return (
    <>
     <nav style={{padding:'1erm',style:"fixed",background:"#ddd",top:0}}>
     <Link to="/">Home</Link>
     <Link to="/Homme">Homme</Link>
     <Link to="/Famme">Famme</Link>
     <Link to="/search">search</Link>
     </nav>
<Routes>
 <Route path="/" element={<Home/>} />
  <Route path="/Homme" element={<Homme/>} />
  <Route path="/Famme" element={<Famme/>} />
  <Route path="/search" element={<Search/>} />
</Routes>

    </>
  )
}

export default App