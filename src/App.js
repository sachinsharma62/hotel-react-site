
import Dashboard from './pages/Dashboard';
import "bootstrap/scss/bootstrap.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-datetime/css/react-datetime.css';
import './App.css';
import About from './pages/About';
import Service from './pages/Service';
// import Diagram from './pages/Diagram';
// import EvChargingApp from './pages/EvChargingApp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import PageMenu from './common/PageMenu';
import Footer from './common/Footer';
import Rooms from './pages/Rooms';

const App = () => {
  return (
    <div className="main-wrapper">
      < PageMenu />
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard /> } />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Rooms' element={<Rooms />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
