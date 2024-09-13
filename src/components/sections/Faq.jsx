import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import FancyButton from '../FancyButton'
import startEarnPng from '../../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../../assets/subtract_png/start_earn_hover.png'
import { Link } from 'react-router-dom'

const faq = [
    {
        title: 'Can users from the United States participate?',
        content: 'We cannot accept contributors from the United States due to regulatory risks and contributors from sanctioned territories. We appreciate your understanding'
    },
    {title: 'What is the WPL?', content: 'WPL is a contribution based Builder & Content Creator programme with the goal to incentivise high value participants and build an exclusive community of evangelists'},
    {title: 'How can one join the program?', content: 'This is an application gated program and you can request access by creating an account and completing your account creation process'},
    {title: 'What are bounties?', content: 'Bounties are an exclusive milestones and project based earning opportunity for builders to participate individually or with teams and earn onchain. Coming soon!'},
    {title: 'Who is eligible to apply for the WPL program?', content: 'Anyone with access to the internet can apply. We will prioritise acceptance based on your proof of work. Currently acceptance rates are very low to maintain a high bar of quality but do apply.'},
    {title: 'How will one know if they\'ve been accepted to WPL?', content: 'Your status on your profile page will change from "Under review" to "Accepted" and you\'ll receive a member badge. Unfortunately at this stage we will not be able to offer individual feedback to rejected applications but you can always re-apply with updated proof of work.'},
]

const Faq = () => {
  return (
    <div id="faq_section" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='flex flex-col justify-center items-center mt-20 md:min-h-[110vh] xl:min-h-[80vh] mb-20'>
        <div>
            <h1 className='text-pretty font-gridular text-[#FAF1B1] text-[28px] md:text-[48px] leading-[45px]'>FAQ</h1>
        </div>

        <div className='min-w-[350px] md:min-w-[500px] lg:min-w-[912px] mt-14'>
            <Accordion type="single" collapsible>
                {faq.map((item, index) => (
                    <AccordionItem data-aos="fade-up" data-aos-delay={1000 * (index * 10)} data-aos-duration="700" key={index} value={`item-${index}`} className="border-[#E4E7EC1A] mb-4">
                        <AccordionTrigger className="text-white text-[14px] md:text-[18px] font-medium hover:no-underline font-inter">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-white/80 font-inter text-[12px] md:text-[16px] max-w-[300px] md:max-w-[450px] lg:max-w-[862px]">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}             
            </Accordion>
        </div>

        <Link to={'/learnmore'} state={'fromHomePage'}>
            <FancyButton
                src_img={startEarnPng}
                hover_src_img={startEarnHoverPng}
                img_size_classes='md:w-[202px] h-[35.2px] md:h-[55px]'
                className='font-gridular text-white text-[14px] md:text-[16px]'
                btn_txt='Read More'
                alt_txt='read more'
            />
        </Link>
    </div>
  )
}

export default Faq