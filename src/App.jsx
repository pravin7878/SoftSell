import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import DarkModeToggle from './components/DarkModeToggle';
import TestimonialSection from './components/Testimonials';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialSection />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App
