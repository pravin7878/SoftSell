import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSection from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HowItWorks />
            <WhyChooseUs />
            <TestimonialSection />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;