import React, { useEffect, useState } from 'react'

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
import { BASE_URL } from '../../utils/helper'
import parse from 'html-react-parser';


const Faq = () => {

    const [faq, setFaq] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFaqs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/faq/home`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const faq = await response.json();
                setFaq(faq?.data);
            } catch (error) {
                console.log('error fetching faq', error);
            } finally{
                setIsLoading(false);
            }
        }
        getFaqs();
    }, [])

    const convertStringToJSX = (str) => {
        const modifiedString = str.replace(/<a /g, '<a class="yellow-link" ');
        return parse(modifiedString);
    }

  return (
    <div id="faq_section" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='flex flex-col justify-center items-center mt-20 md:min-h-[110vh] xl:min-h-[80vh] mb-20'>
        <div>
            <h1 className='text-pretty font-gridular text-[#FAF1B1] text-[28px] md:text-[48px] leading-[45px]'>FAQ</h1>
        </div>

        {isLoading ? <div className='text-white text-[14px] md:text-[16px] font-inter'>Loading...</div> :
            <div className='min-w-[350px] md:min-w-[500px] lg:min-w-[912px] mt-14'>
                <Accordion type="single" collapsible>
                    {faq?.map((item, index) => (
                        <AccordionItem data-aos="fade-up" data-aos-delay={1000 * (index * 10)} data-aos-duration="700" key={index} value={`item-${index}`} className="border-[#E4E7EC1A] mb-4">
                            <AccordionTrigger className="text-white text-[14px] md:text-[18px] font-medium hover:no-underline font-inter">{item.title}</AccordionTrigger>
                            <AccordionContent className="text-white/80 font-inter text-[12px] md:text-[16px] max-w-[300px] md:max-w-[450px] lg:max-w-[862px]">
                                {convertStringToJSX(item.content)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}             
                </Accordion>
            </div>
        }

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