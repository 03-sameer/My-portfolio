import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const ScrollButtons = () => {
  const [isDownVisible, setIsDownVisible] = useState(false);
  const [isUpVisible, setIsUpVisible] = useState(false);
  const [scrollTween, setScrollTween] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      // Show Down Button when halfway down
      setIsDownVisible(scrollY > windowHeight / 2 && scrollY < scrollHeight - windowHeight);

      // Show Up Button when near the bottom
      setIsUpVisible(scrollY > scrollHeight - windowHeight - 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to kill existing scroll animation
  const stopScroll = () => {
    if (scrollTween) {
      scrollTween.kill(); // Kill any ongoing scroll animation
      setScrollTween(null);
    }
  };

  const scrollToEnd = () => {
    stopScroll(); // Ensure old animation stops before starting a new one

    const tween = gsap.to(window, {
      scrollTo: { y: document.body.scrollHeight, autoKill: false },
      duration: 25, // Increased initial speed
      ease: 'back.inOut', // Faster start
      onUpdate: () => setScrollTween(tween),
      onComplete: () => setScrollTween(null),
    });

    setScrollTween(tween);
  };

  const scrollToTop = () => {
    stopScroll(); // Stop any ongoing animation before scrolling to top

    const tween = gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 2, // Faster scroll up
      ease: 'power3.inOut',
      onUpdate: () => setScrollTween(tween),
      onComplete: () => setScrollTween(null),
    });

    setScrollTween(tween);
  };

  return ( 
    <>
      {isDownVisible && (
        <div className="fixed bottom-0.5 right-3 z-50 flex flex-col items-center space-y-1 group">
          <span className="text-black bg-transparent px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
           Tap for a Slide...
          </span>
          <button
            onClick={scrollToEnd}
            onMouseEnter={stopScroll}
            className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowDown size={20} />
          </button>

          <span className="text-black bg-transparent px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
           Touch for stop. 
          </span>
        </div>
      )}

      {isUpVisible && (
        <div className="fixed bottom-10 left-6 z-50 flex flex-col items-center space-y-1 group">
          <span className="text-black bg-transparent px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Hit Me Up
          </span>
          <button
            onClick={scrollToTop}
            onMouseEnter={stopScroll}
            className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
