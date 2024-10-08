import { useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/sections/Footer'

import RoutesPublic from './routes/Routes'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      offset: 1
    });
  }, [])

  useEffect(() => {
    // Disable zoom on wheel event (Ctrl + Mouse Wheel)
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Disable zoom on keyboard shortcuts (Ctrl + +/-)
    const handleKeydown = (e) => {
      if ((e.ctrlKey && (e.key === '+' || e.key === '-')) || e.key === '0') {
        e.preventDefault();
      }
    };

    // Disable pinch-to-zoom on touch devices
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeydown, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return (
    <div className='min-h-dvh min-w-screen size-full bg-[#16237f] scroll-smooth'>
      <div className='absolute top-0 left-0 w-full z-[100] opacity-100'>
        <NavBar />
      </div>

      <RoutesPublic />

      <Footer />
    </div>
  )
}

export default App




