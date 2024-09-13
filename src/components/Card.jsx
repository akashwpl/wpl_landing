import { useState } from 'react'

import card_subtract from '../assets/subtract_png/card_subtract.png'
import card_subtract_hover from '../assets/subtract_png/card_subtract_hover.png'
import { FollowerPointerCard } from './ui/following-pointer';

const Card = ({ icon, title, description }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => setIsHovered(!isHovered);

    return (
        <div 
            className="col-span-12 md:col-span-6 mt-6 md:mt-0 relative w-[330px] h-[160px] md:h-[187px] group"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {/* <FollowerPointerCard title={<div>hover effect</div>} className='z-[100]'> */}
                    <img 
                        src={isHovered ? card_subtract_hover : card_subtract } 
                        alt="WPL card"
                        className='opacity-30' 
                    />
                    <div className='absolute top-5 px-6'>
                        <div className='text-secondary group-hover:text-[#E38070] group-hover:rotate-90 max-w-fit transition-all duration-500'>
                            {icon}
                        </div>
                        <p className='text-[18px] py-2 text-white font-gridular text-start'>{title}</p>
                        <p className='text-white text-[14px] opacity-80 font-inter text-start'>{description}</p>
                    </div>
            {/* </FollowerPointerCard> */}
    </div>
        
    )
}

export default Card





