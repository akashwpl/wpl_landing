import { useState } from 'react'

import card_subtract from '../assets/subtract_png/card_subtract.png'
import card_subtract_hover from '../assets/subtract_png/card_subtract_hover.png'

const KF_Card = ({ title, description, index }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => setIsHovered(!isHovered);

    return (
        <div 
            data-aos="fade-up" data-aos-delay={`${(400) + index}`} data-aos-duration="700"
            className="col-span-12 md:col-span-6 mt-6 md:mt-0 relative group "
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
        <img 
            src={isHovered ? card_subtract_hover : card_subtract } 
            alt="Key Feature Card"
            className='opacity-30 w-[571px] xl:w-[98%] h-[209px]' 
        />
        <div className='absolute top-0 lg:top-3 px-10 pt-3'>
            <p className='text-[20px] leading-[24px] py-2 text-white font-gridular text-start font-normal max-w-[521px]'>{title}</p>
            <p className='text-[#CCCCF8] text-[13px] lg:text-[16px] leading-[22px] font-inter text-start font-light max-w-[521px]'>{description}</p>
        </div>
    </div>
        
    )
}

export default KF_Card





