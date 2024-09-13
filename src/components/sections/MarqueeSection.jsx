import React from 'react'

import Marquee from "../ui/marquee";

import marqueeCard from '../../assets/subtract/marquee_card.svg'
import marqueeFronPng from '../../assets/subtract_png/marquee_front.png'
import marqueeBackPng from '../../assets/subtract_png/marquee_back.png'

import FancyButton from '../FancyButton';

import startEarnPng from '../../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../../assets/subtract_png/start_earn_hover.png'

// Wolf pack images
import puppy from '../../assets/images/wolf_pack/Puppy.png'
import redwolf from '../../assets/images/wolf_pack/Redwolf.png'
import arcticwolf from '../../assets/images/wolf_pack/Arctic.png'
import graywolf from '../../assets/images/wolf_pack/Gray.png'
import celestialwolf from '../../assets/images/wolf_pack/Celestial.png'
import firewolf from '../../assets/images/wolf_pack/Fire.png'
import shadowwolf from '../../assets/images/wolf_pack/Shadow.png'
import icewolf from '../../assets/images/wolf_pack/ice.png'
import thunderwolf from '../../assets/images/wolf_pack/Thunder.png'
import warg from '../../assets/images/wolf_pack/Warg.png'
import werewolf from '../../assets/images/wolf_pack/Werewolf.png'
import fenrir from '../../assets/images/wolf_pack/Fenrir.png'
import direwolf from '../../assets/images/wolf_pack/Direwolf.png'

import joinSubtractPng from '../../assets/subtract_png/join_subtract.png'
import joinSubtractHoverPng from '../../assets/subtract_png/join_subtract_hover.png'


const data = [
    {
        text: '1', 
        occ: "Puppy", 
        points: 330,
        image: puppy
    },
    {
        text: '2', 
        occ: "REDWOLF", 
        points: 990,
        image: redwolf
    },
    {
        text: '3', 
        occ: "ARTICWOLF", 
        points: 1980,
        image: arcticwolf
    },
    {
        text: '4', 
        occ: "GRAYWOLF", 
        points: 3300,
        image: graywolf
    },
    {
        text: '5', 
        occ: "CELESTIALWOLF", 
        points: 4950,
        image: celestialwolf
    },
    {
        text: '6', 
        occ: "FIREWOLF", 
        points: 6930,
        image: firewolf
    },
    {
        text: '7', 
        occ: "SHADOWWOLF", 
        points: 9240,
        image: shadowwolf
    },
    {
        text: '8', 
        occ: "ICEWOLF", 
        points: 11880,
        image: icewolf
    },
    {
        text: '9', 
        occ: "THUNDERWOLF", 
        points: 14850,
        image: thunderwolf
    },
    {
        text: '10', 
        occ: "WARG", 
        points: 18150,
        image: warg
    },
    {
        text: '11', 
        occ: "WEREWOLF", 
        points: 21780,
        image: werewolf
    },
    {
        text: '12', 
        occ: "FENRIR", 
        points: 25740,
        image: fenrir
    },
    {
        text: '13', 
        occ: "DIREWOLF", 
        points: 30030,
        image: direwolf
    }
]

const WolfCard = ({key, wolf}) => {
    return (
        <div key={key} className='card relative w-[207px] lg:w-[207px] h-[228px] lg:h-[228px] mr-6'>
            <div className='content'>
                <div className='front'>
                    <img src={marqueeFronPng} alt='about card 1' className='size-full'/>
                    <div className='w-[80%] absolute bottom-4 left-1/2 -translate-x-1/2 '>
                        <img src={wolf.image} alt='about card 1 img' />    
                    </div>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[#E38070] font-bevan'>#{wolf.text}</p>
                        <p className='text-[22px] text-primary font-bienvenue'>{wolf.occ}</p>
                    </div>
                </div>
                <div className='back'>
                    <img src={marqueeBackPng} alt='about card 1' className='size-full'/>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[22px] text-primary font-bienvenue'>{wolf.occ}</p>
                        <div className='border border-b-white opacity-30 my-2'></div>
                        <div className='mb-2'>
                            <p className='text-[#E38070] font-bevan'>RANK</p>
                            <p className='font-inter opacity-80'>#{wolf.text}</p>
                        </div>
                        <div>
                            <p className='text-[#E38070] font-bevan'>POINTS</p>
                            <p className='font-inter backdrop-opacity-80'>{wolf.points} WP</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const MarqueeSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
        <div className='mb-16'>
            <h2 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='text-[28px] md:text-[48px] max-w-[230px] text-center md:max-w-full font-gridular text-primary uppercase'>Join the wolfpack, earn your rank!</h2>
        </div>

        <Marquee pauseOnHover reverse={true} className="[--duration:20s] p-0">
            {data.map((wolf) => (
                <WolfCard key={wolf.text} wolf={wolf} />
            ))}
        </Marquee>

        <Marquee pauseOnHover reverse={false} className="[--duration:20s]">
            {data.map((wolf) => (
                <WolfCard key={wolf.text} wolf={wolf} />
            ))}
        </Marquee>

        <div className='block md:hidden'>
            <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
                {data.map((wolf) => (
                    <WolfCard key={wolf.text} wolf={wolf} />
                ))}
            </Marquee>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className="mt-16 hidden md:block">
            <a href='https://form.typeform.com/to/jPgPdA8l' target='_blank' >
                <FancyButton
                    src_img={joinSubtractPng}
                    hover_src_img={joinSubtractHoverPng}
                    img_size_classes='w-[208px] md:w-[318px] h-[36.5px] md:h-[65px]'
                    className='font-gridular text-[#10105E] text-[14px] md:text-[24px]'
                    btn_txt='Join the Mission'
                    alt_txt='join mission button'
                    isArrow={true}
                />
            </a>
        </div>
    </div>
  )
}

export default MarqueeSection