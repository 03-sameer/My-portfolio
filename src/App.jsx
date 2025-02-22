import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutSection from './components/Aboutsection';
import ScrollToEndButton from './components/ScrollToEndButton'; // Import the scroll button

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <AboutSection />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      <ScrollToEndButton />
    </main>
  );
};

export default App;
