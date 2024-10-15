import React, { useEffect } from 'react'

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import aboutCard1Img from '../../assets/images/wolf_pack/aboutcard1.png'
import aboutCard2Img from '../../assets/images/wolf_pack/aboutcard2.png'
 
import aboutLowerCard from '../../assets/subtract_png/aboutlowercard.png'
import aboutRightCard from '../../assets/subtract_png/aboutrightcard.png'

// import joinSubtract from '../../assets/subtract/join_subtract.svg'
// import joinSubtractHover from '../../assets/subtract/join_subtract_hover.svg'

// Png subtract files
import joinSubtractPng from '../../assets/subtract_png/join_subtract.png'
import joinSubtractHoverPng from '../../assets/subtract_png/join_subtract_hover.png'

import FancyButton from '../FancyButton'
import { AnimatedList } from '../ui/animated-list';
// import { FollowerPointerCard } from './ui/following-pointer';

import aboutcard1Png from '../../assets/subtract_png/aboutcard1.png'
import aboutcard2Png from '../../assets/subtract_png/aboutcard2.png'
import startEarnPng from '../../assets/subtract_png/start_earn.png'
import startEarnHoverPng from '../../assets/subtract_png/start_earn_hover.png'
import { leaderboard_dummy_data } from '../../utils/leaderboard_dummy_data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/helper';


const About = () => {

    const [discordData, setDiscordData] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = (await axios({
                method: 'GET',
                url: `${BASE_URL}/leaderboard`,
                // headers: headers
            })).data;

            setDiscordData(response?.data);
        }
        getData();
    }, []);

  return (
    <div id="about_section" className='mx-5 md:mx-[130px] xl:mx-[400px] mt-32 z-[101] relative'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="700"  className='text-primary font-gridular text-[28px] md:text-[48px] leading-[26px] md:leading-[45px] uppercase'>More About WPL</h1>
            
            <div className='mt-10 flex flex-col lg:flex-row items-center gap-8'>
                <div className='flex flex-col gap-8'>
                    <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="700" className='flex flex-col items-center md:flex-row gap-8'>
                        <CardContainer className='relative w-[300px] lg:w-[374px] '>
                            <CardBody className="bg-[#16237f] relative h-auto rounded-xl">
                                <CardItem
                                    translateZ="20"
                                    className=""
                                    rotateY={-2}
                                >
                                    <img src={aboutcard1Png} alt='about card 1' className='opacity-30 h-[360px] lg:h-[420px]'/>
                                </CardItem>
                                <CardItem
                                    translateZ="30"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                >
                                    <div className='w-[80%] lg:w-3/4 absolute top-5 md:top-8 left-1/2 translate-x-[-52%] '>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard1Img} alt='about card 1 img' className='size-full'/>
                                    </div>
                                    <div className='absolute bottom-7 md:bottom-6 w-full text-start ps-8 md:ps-10 pr-3'>
                                        <p className='lg:text-[20px] text-white font-gridular'>Are you a developer/builder?</p>
                                        <p className='text-[14px] lg:text-[15px] text-[#CCCCF8] font-light font-inter mt-1'>You can now join the pack, and approved members can request to complete bounties's, earn based on milestones & build your proof of work</p>
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>

                        <CardContainer className='relative w-[300px] lg:w-[374px]'>
                            <CardBody className="bg-[#16237f] relative  w-auto sm:w-[30rem] h-auto rounded-xl">
                                <CardItem
                                    translateZ="20"
                                    className=""
                                >
                                    <img src={aboutcard2Png} alt='about card 2' className='opacity-30 h-[360px] lg:h-[420px]'/>
                                </CardItem>
                                <CardItem
                                    translateZ="30"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                >
                                    <div className='w-[80%] lg:w-3/4 absolute top-5 md:top-8 left-1/2 translate-x-[-52%]'>
                                        <div className='bg-[#16237f]/20 size-full absolute'/>
                                        <img src={aboutCard2Img} alt='about card 1 img' className=''/>
                                    </div>
                                    <div className='absolute bottom-12 w-full text-start ps-8 md:ps-10 pr-3'>
                                        <p className='lg:text-[20px] text-white font-gridular'>Are you a non-technical and enjoy contributing?</p>
                                        <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light font-inter mt-1'>You can write, create video content, evangelise, earn your rank and earn as a member of the pack</p>
                                        </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
                        <CardContainer className='relative h-full w-full'>
                            <CardBody className="bg-[#16237f] relative w-auto  h-auto rounded-xl">
                                <CardItem translateZ="20" rotateY={-1}>
                                    <img src={aboutLowerCard} alt='about card 1' className='opacity-30 h-[230px] lg:h-[200px]'/>
                                </CardItem>
                                <CardItem
                                    translateZ="30"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl text-start p-5"
                                >
                                    <h2 className='text-[16px] lg:text-[20px] text-white font-gridular'>Leaderboard Tiers</h2>
                                    <p className='text-[14px] lg:text-[16px] text-[#CCCCF8] font-light font-inter mt-3 mb-4 leading-5'>Advance through Leaderboard Tiers by earning points and claim rewards at each level (Puppy to Dire Wolf). Register on OnlyDust with your Github account, follow the rules, and complete KYC to receive rewards.</p>
                                    <FancyButton
                                        src_img={startEarnPng}
                                        hover_src_img={startEarnHoverPng}
                                        img_size_classes='w-[167px] h-[34.5px]'
                                        className='font-gridular text-white text-[14px] uppercase'
                                        btn_txt='learn more'
                                        alt_txt='redacted button'
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
                    <CardContainer className=' md:w-[374px] h-full relative'>
                        <CardBody className="bg-[#16237f] relative h-full  w-auto sm:w-[30rem] rounded-xl">
                            <CardItem
                                translateZ="20"
                                className=""
                            >
                                <img src={aboutRightCard} alt='about card 1' className='size-full h-[650px]'/>
                            </CardItem>
                            <CardItem
                                translateZ="30"
                                className="absolute top-0 left-0 w-full h-full rounded-xl p-5"
                            >
                                <div className='mt-6 h-[40%] overflow-hidden'>
                                    <p className='text-[16px] md:text-[20px] text-white text-start font-gridular'>New Pack Members</p>
                                    <AnimatedList delay={3000}>
                                        {discordData?.slice(0, 10)?.map((data, idx) => (
                                            <div key={idx} className='flex items-center gap-3 mt-6'>
                                                <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                                <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>{data?.discordIdentifier}</p>
                                            </div>
                                        ))}
                                    </AnimatedList>
                                </div>
                                <div className='border-b border-[#57579D] my-6 '/>
                                <div className='mt-6 h-[50%] overflow-hidden'>
                                    <p className='text-[16px] md:text-[20px] text-white text-start font-gridular'>Recent Earners</p>
                                    <AnimatedList delay={2000}>
                                        {discordData?.slice(10, 24)?.map((data, idx) => 
                                            <div key={idx} className='flex justify-between items-center gap-3 mt-6'>
                                                <div className='flex items-center gap-4'>
                                                    <img src={aboutCard1Img} alt='about card 1 img' className='size-9 rounded-full object-cover'/>
                                                    <div className='text-start'>
                                                        <p className='text-[14px] md:text-[16px] text-white font-medium font-inter'>{data.discord_id}</p>
                                                        <p className='text-[#9292BA] text-[14px] font-light'>{data?.tier}</p>
                                                    </div>
                                                </div>
                                                <div className='text-[14px] font-light text-white'>
                                                    {data.points} points
                                                </div>
                                            </div>
                                        )}
                                      
                                    </AnimatedList>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="700" className="my-16">
                <Link to='/learnmore'>
                    <FancyButton
                        src_img={startEarnPng}
                        hover_src_img={startEarnHoverPng}
                        img_size_classes='w-[146px] md:w-[318px] h-[36.5px] md:h-[65px]'
                        className='font-gridular text-white text-[14px] md:text-[24px]'
                        btn_txt='Learn more'
                        alt_txt='joint the pack button'
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About