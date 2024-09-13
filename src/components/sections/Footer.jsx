import React from 'react'

import footerBg from '../../assets/images/footer_bg.png'

import wolfLogo from '../../assets/svg/wolf_logo_footer.svg'
import FancyButton from '../FancyButton'
import joinSubtractPng from '../../assets/subtract_png/join_subtract.png'
import joinSubtractHoverPng from '../../assets/subtract_png/join_subtract_hover.png'

import leftBlueBtnBorder from '../../assets/C.png'
import rightBlueBtnBorder from '../../assets/D.png'

const Footer = () => {

 return (
    <div className='relative overflow-x-hidden'>
      <div className='size-full overflow-hidden'>
        <img src={footerBg} className='h-[499px] 2xl:h-[700px] min-w-[700px] w-full bg-center' />
      </div>
      <div className='absolute top-0 left-0 size-full flex flex-col items-center z-30 p-10 pb-5'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full'>
          <div className='translate-y-36 md:translate-y-14 flex flex-col justify-center md:justify-start items-center md:items-start'>
            <h2 className='text-[#16237F] font-gridular text-[24px] md:text-[48px] leading-[26px] md:leading-[52px] max-w-[627px] uppercase text-center md:text-start'>become a part of wpl to earn rewards</h2>
            <div className='h-[40px] md:h-[50px] w-[160px] md:w-[200px]  flex items-center mt-1 cursor-pointer'>
              <img src={leftBlueBtnBorder} alt='' className='size-full w-[20px]'/>
              <a href='https://form.typeform.com/to/jPgPdA8l' target='_blank' className='text-white h-full w-full flex justify-center items-center bg-[#1C256B] font-gridular uppercase text-[16px] lg:text-[20px]'>Apply Now</a>
              <img src={rightBlueBtnBorder} alt='' className='size-full w-[20px]'/>
            </div>

          </div>
          <div className='flex justify-end items-end text-center md:text-start gap-10 h-full max-w-fit mb-10 -translate-y-2'>
            <div className='flex flex-col gap-4 text-[12px] font-normal text-[#16237F] uppercase leading-[12px] font-bienvenue'>
              <p className='cursor-pointer'>Contact us</p>
              <p className='cursor-pointer'>Terms and conditions</p>
              <p className='cursor-pointer'>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div className='border-b border-[#16237F] w-full'/>
        <div className='flex justify-center md:justify-between items-center w-full mt-5 gap-2 md:gap-0'>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope'>Copyright @ Wpl</p>
          <img src={wolfLogo} alt='wolf' className='w-[18px] h-[21px] md:-translate-x-4'/>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope hidden md:block'>Wolf Pack League</p>
        </div>
      </div>
    </div>
  )
}

export default Footer