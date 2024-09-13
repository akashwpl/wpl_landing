import React, { useEffect, useState } from 'react'
import wolfLogo from '../assets/svg/wolf_logo.svg'
import GlyphEffect from './GlyphEffect'
import { Link, useLocation } from 'react-router-dom'


function NavBar() {
  const { pathname } = useLocation()

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar((prev) => !prev)
  }

  useEffect(() => {
    if(showNavbar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showNavbar])


  return (
    <div className='w-full pt-8'>
      <div className='hidden md:flex justify-between items-center font-bienvenue mx-5 lg:mx-[130px]'>
        <div className='flex items-center gap-6'>
          <Link to={'/'} className='text-primary text-[18px]'><GlyphEffect text={'HOME'}/></Link>
          <Link to={'/learnmore'} className='text-primary text-[18px]'><GlyphEffect text={'ABOUT'}/></Link>
        </div>
        <Link to={'/'}><img src={wolfLogo} alt='wolf logo' className='translate-x-14 w-14 h-16'/></Link>
        <div className='flex items-center gap-6'>
          <p onClick={() => document.getElementById('features_section').scrollIntoView({ behavior: 'smooth' })} className='text-primary text-[18px]'><GlyphEffect text={'EARN'}/></p>
          <Link to={'/leaderboard'} className='text-primary text-[18px]'><GlyphEffect text={'LEADERBOARD'}/></Link>
          {pathname.includes('/leaderboard') 
            ? <Link to={'/learnmore'} state={'fromHomePage'} className='text-primary text-[18px]'><GlyphEffect text={'FAQ'}/></Link>
            : <p onClick={() => document.getElementById('faq_section').scrollIntoView({ behavior: 'smooth' })} className='text-primary text-[18px]'><GlyphEffect text={'FAQ'}/></p>
          }
        </div>
      </div>

      <div className='flex relative md:hidden justify-between items-center'>
        <div className='z-[100]'>
          <Link to={'/'}><img src={wolfLogo} alt='wolf logo' className='translate-x-14 w-6 h-7'/></Link>
        </div>
        <div onClick={handleShowNavbar} className='h-[28px] -translate-x-10 cursor-pointer z-[100]'>
          <div id="nav-icon3" className={showNavbar ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {showNavbar && <div onClick={handleShowNavbar} className='absolute -top-8 left-0 h-screen w-full bg-[#16237F]/30 backdrop-blur-sm z-[50]'/>}
        
        <div className={`absolute -top-8 left-0 ${showNavbar ? 'translate-y-0' : '-translate-y-[900px]'} transition-all duration-500 w-full bg-[#16237F] z-50`}>
          <div className='flex flex-col justify-center items-center text-center bg-[#16237F] text-white font-bienvenue mt-20'>
            <Link to={'/'}><h2 className='text-[24px] text-primary border-b border-white/5 w-[90%] mb-2'>HOME</h2></Link>
            <Link to={'/learnmore'}><h2 className='text-[24px] text-primary border-b border-white/5 w-[90%] mb-2'>ABOUT</h2></Link>
            <h2 className='text-[24px] text-primary border-b border-white/5 w-[90%] mb-2'>EARN</h2>
            <Link to={'/leaderboard'}><h2 className='text-[24px] text-primary border-b border-white/5 w-[90%] mb-2'>LEADERBOARD</h2></Link>
            <h2 className='text-[24px] text-primary w-[90%] mb-2'>FAQ</h2>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default NavBar