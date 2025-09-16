import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <Features />
      <TargetAudience />
      <Pricing onContactClick={openContactModal} />
      <Testimonials />
      <CTA onContactClick={openContactModal} />
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  );
}

export default App;
