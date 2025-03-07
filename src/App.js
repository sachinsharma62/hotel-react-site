
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
import {  Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import PageMenu from './common/PageMenu';
import Footer from './common/Footer';
import Rooms from './pages/Rooms';
import Bookings from './common/Bookings';
import BookingForm from './common/BookingForm';

const App = () => {
  return (
    <div className="main-wrapper">
      < PageMenu />
        <Routes>
          <Route path='/' element={<Dashboard /> } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/booking-form' element={<BookingForm />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
