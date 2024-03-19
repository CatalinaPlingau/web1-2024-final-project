import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Section from './Section';
import Catalog from './Catalog';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            
          <Route path="/Section" element={<Section />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Catalog" element={<Catalog/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
