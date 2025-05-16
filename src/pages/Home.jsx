import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSection from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    const homeRef = useRef(null);
    const howRef = useRef(null);
    const whyRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div>
                <HeroSection ref={homeRef}
                    onHeroClick={() => scrollToSection(homeRef)}
                    onHowClick={() => scrollToSection(howRef)}
                    onWhyClick={() => scrollToSection(whyRef)}
                    onContactClick={() => scrollToSection(contactRef)}
                />
            </div>
            <div ref={howRef}><HowItWorks /></div>
            <div ref={whyRef}><WhyChooseUs /></div>
            <div><TestimonialSection /></div>
            <div ref={contactRef}><ContactForm /></div>
            <Footer />
        </div>
    );
};

export default Home;