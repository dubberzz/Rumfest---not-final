import About from './components/Sidebar/About';
import Fest from './components/festivale/Fest';
import Harta from './components/harta/harta';
import "leaflet/dist/leaflet.css";
import Sidebar from './components/Sidebar/sidebar';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './Home';

function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="about" element={<About />} />
        <Home />
        
      </Routes>
    </Router>
  )
}

export default Home 
