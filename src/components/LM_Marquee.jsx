import React from 'react'

import Marquee from "./ui/marquee";

import marqueeFronPng from '../assets/subtract_png/marquee_front.png'
import marqueeBackPng from '../assets/subtract_png/marquee_back.png'

// Wolf pack images
import puppy from '../assets/images/wolf_pack/Puppy.png'
import redwolf from '../assets/images/wolf_pack/Redwolf.png'
import arcticwolf from '../assets/images/wolf_pack/Arctic.png'
import graywolf from '../assets/images/wolf_pack/Gray.png'
import celestialwolf from '../assets/images/wolf_pack/Celestial.png'
import firewolf from '../assets/images/wolf_pack/Fire.png'
import shadowwolf from '../assets/images/wolf_pack/Shadow.png'
import icewolf from '../assets/images/wolf_pack/ice.png'
import thunderwolf from '../assets/images/wolf_pack/Thunder.png'
import warg from '../assets/images/wolf_pack/Warg.png'
import werewolf from '../assets/images/wolf_pack/Werewolf.png'
import fenrir from '../assets/images/wolf_pack/Fenrir.png'
import direwolf from '../assets/images/wolf_pack/Direwolf.png'

const data = [
    {
        text: '1',
        occ: "Puppy", 
        description: "The adorable and playful young of a wolf, full of energy and curiosity.",
        image: puppy
    },
    { 
        text: '2',
        occ: "REDWOLF", 
        description: "Critically endangered, red wolves are smaller than gray wolves but still formidable predators in their habitat.",
        image: redwolf
    },
    { 
        text: '3',
        occ: "ARTICWOLF", 
        description: "Well-adapted to harsh Arctic environments, Arctic wolves are skilled hunters in freezing conditions.",
        image: arcticwolf
    },
    { 
        text: '4',
        occ: "GRAYWOLF", 
        description: "The largest wild member of the Canidae family, known for its intelligence and social structure.",
        image: graywolf
    },
    { 
        text: '5',
        occ: "CELESTIALWOLF", 
        description: "Guardians of sacred fam, celestial wolves wield cosmic powers, representing the stars and heavens.",
        image: celestialwolf
    },
    { 
        text: '6',
        occ: "FIREWOLF", 
        description: "Channeling the power of flames, fire wolves engulf their enemies in fiery attacks, adding a destructive element to their strength.",
        image: firewolf
    },
    { 
        text: '7',
        occ: "SHADOWWOLF", 
        description: "Associated with darkness and stealth, shadow wolves can blend into shadows and strike unseen, making them formidable hunters.",
        image: shadowwolf
    },
    { 
        text: '8',
        occ: "ICEWOLF", 
        description: "Inhabiting frozen landscapes, ice wolves possess abilities related to ice and cold, making them formidable opponents.",
        image: icewolf
    },
    { 
        text: '9',
        occ: "THUNDERWOLF", 
        description: "Magical creatures with lightning-based powers, possessing both physical strength and elemental abilities.",
        image: thunderwolf
    },
    { 
        text: '10',
        occ: "WARG", 
        description: "Large, intelligent wolves often allied with or controlled by orcs, cunning and dangerous adversaries from Middle-earth.",
        image: warg
    },
    { 
        text: '11',
        occ: "WEREWOLF", 
        description: "Humans capable of transforming into wolves or wolf-like creatures, known for their strength and agility in their wolf form.",
        image: werewolf
    },
    { 
        text: '12',
        occ: "FENRIR", 
        description: "A monstrous wolf from Norse mythology destined to bring about Ragnarok, feared for its immense strength and ferocity.",
        image: fenrir
    },
    { 
        text: '13',
        occ: "DIREWOLF", 
        description: "Larger and more ferocious than any other wolves, dire wolves are iconic predators",
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
                        <img className='w-[171.35px] h-[120.62px]' src={wolf.image} alt='about card 1 img' />    
                    </div>
                    <div className='absolute top-8 w-full text-start ps-7 pr-3'>
                        <p className='text-[11.82px] leading-[11.23px] text-[#E38070] font-bevan'>#{wolf.text}</p>
                        <p className='text-[22.56px] leading-[24.28px] text-primary font-bienvenue'>{wolf.occ}</p>
                    </div>
                </div>
                <div className='back'>
                    <img src={marqueeBackPng} alt='about card 1' className='size-full'/>
                    <div className='absolute top-6 w-full text-start ps-7 pr-3'>
                        <p className='text-[22.56px] leading-[24.28px] text-primary font-bienvenue'>{wolf.occ}</p>
                        <div className='border border-b-white opacity-30 my-2'></div>
                        <div className=''>
                            <p className='text-[16px] leading-[22px] font-light font-inter opacity-80'>{wolf.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LM_Marquee = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="410" data-aos-duration="700" className='flex flex-col justify-center items-center mt-14'>
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
    </div>
  )
}

export default LM_Marquee