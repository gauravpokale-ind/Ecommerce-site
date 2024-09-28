import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import CartDetail from './components/CartDetail'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ContactUs from './components/footerDetails/ContactUs';
import FollowUs from './components/footerDetails/FollowUs';
import PrivacyPolicy from './components/footerDetails/PrivacyPolicy';
import Terms from './components/footerDetails/Terms';
import Volunteer from './components/footerDetails/Volunteer';
import FreeApi from './components/footerDetails/FreeApi';
import Partner from './components/footerDetails/Partner';

function App() {

  const [query, setQuery] = useState('')

  return (
    <>
      <Header setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Home query={query} />} />
        <Route path='/cart' element={<CartDetail />} />
        <Route path='/follow' element={<FollowUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/api' element={<FreeApi />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App
