import React, { useEffect, useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import { BASE_URL, highlightWord } from '../utils/helper'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser';


const faq = [
    {
        title: 'What is the StarkWare Wolf Pack League inspired by?',
        content: <p>The Wolf Pack League is inspired by <a href='https://lunarcrush.com/earn' target='_blank' className='text-primary underline'>LunarCrush</a> and  <a href='https://superteam.fun/' target='_blank' className='text-primary underline'>Superteam</a>. It will start with grassroots tools like Notion and Discord for the frontend, with a solid backend using CommonRoom and Onlydust.</p>
    },
    {
        title: 'How will previous community involvement be taken into account?',
        content: 'While the exact calculation won\'t be fully transparent to avoid gaming, previous work and engagement will influence eligibility and rewards. The Wolf Pack League is a StarkWare initiative separate from the Starknet Foundation\'s ECMP or provisions program.'
    },
    {
        title: 'How will activity be tracked?',
        content: <p>Activity will be tracked using  <a href='https://www.commonroom.io/' target='_blank' className='text-primary underline'>CommonRoom</a>, a tool StarkWare has been testing for 2 years. The setup is similar to LunarCrush but with a much broader universe of platforms not only focused on Twitter/X.</p>
    },
    {
        title: 'What mechanisms are in place to prevent spam and gaming of the system?',
        content: 'Whitelisting of creators and devs will be used initially to combat spam. The exact criteria for converting points to rewards won\'t be fully transparent to maintain some flexibility and avoid gaming. Intelligent spam bots and artificial engagement will aim to be detected and not rewarded.'
    },
    {
        title: 'What type of content is eligible? Does it have to cover Starknet broadly or can it focus on specific projects?',
        content: 'Content focused on specific Starknet projects is also eligible. Ecosystem projects will also be able to list their own bounties, similar to Superteam, although this won\'t be available from day one.'
    },
    {
        title: 'Who is eligible to participate as a Wolf?',
        content: 'Whitelisting will start with people who have existing engagement and history on social platforms, ranging from micro-influencers to key opinion leaders (KOLs). StarkWare believes micro-influencers can have an outsized impact due to their high relative engagement and credibility Developers can also earn points through GitHub activity, Stack Overflow, attending meetups, dev-focused content, completing dev projects etc.'
    },
    {
        title: 'How will participants coordinate and compete?',
        content: 'Whitelisted members will join teams like Normal Wolf, Fantasy Wolf, Meme Wolf to enable additional features. Competitions between teams may be organized.'
    },
    {
        title: 'What are the future plans for the program?',
        content: 'Potential expansions include team competitions, partnerships, and a community council to further engage participants. Higher reward tiers after Dire Wolf may include special weapons and defense tools to build a FOCG on top of the WPL. The ultimate goal is to create superfans who inspire and educate other developer, content creators and users.'
    },
    {
        title: 'Will there be bounties from ecosystem projects?',
        content: <p>Yes, similar to  <a href='https://earn.superteam.fun/bounties/' target='_parent' className='text-primary underline'>Superteam\'s bounties</a>, each whitelisted project will be able to list its own bounties. This is a high priority but will not be live from day one.</p>
    },
    {
        title: 'Are team members of Starknet projects eligible to participate as Wolves?',
        content: 'Members of StarkWare and Starknet Foundation are excluded. Generally, we want to avoid double-spending. For ecosystem teams, eligibility will be determined on an individual basis based on the team\'s maturity. Allowing creators to eventually get hired by projects they cover should be fine.'
    },
    {
        title: 'How will rewards and climbing the hierarchy work?',
        content: 'The conversion from points to STRK tokens will be transparent but not immediate to avoid gaming of the system. Exact criteria for climbing the hierarchy are not transparent. The goal is to start with a more controlled system and improve it over time with community governance.'
    },
    {
        title: 'I sent my application but never heard back. What should I do?',
        content: 'If you don\'t receive an immediate response after submitting your application, don\'t worry - your application is still under consideration. We are continuously reviewing applications and reaching out to shortlisted candidates on an ongoing basis. While we may not be able to provide individual feedback due to the volume of applications, please know that the door to join WPL remains open. We encourage you to continue building your presence in the Starknet ecosystem in the meantime. Stay tuned for updates as our team works on improving the platform and adding new features.'
    },
    {
        title: 'What is the deadline for the program and how are rewards balanced between developers and content creators?',
        content: 'There is no specific deadline. Applications will be reviewed on an ongoing basis once the program starts. After phase 1 ends, StarkWare will analyze the program\'s success and decide whether to launch phase 2. The point system aims to match and complement other grant systems in the Starknet ecosystem without directly competing with them.'
    },
    {
        title: 'What part of the budget does the 5 million STRK allocation come from? Is it part of the 9% community provision?',
        content: 'The Wolf Pack League is a StarkWare initiative, not a Starknet Foundation program. It is not connected to the community provision, ECMP or similar initiatives.'
    },
    {
        title: 'What kind of content should whitelist participants post?',
        content: 'Whitelisted participants should focus on answering questions and educating other users and devs. The CommonRoom tool will be used to observe and detect spam activity, and if a participant starts spamming, a cooldown will be placed on their point accrual.'
    },
    {
        title: 'How many tokens can participants earn at each tier?',
        content: 'The economic model is not fully transparent initially to avoid gamification. The first tiers are easier to reach, with difficulty increasing over time. Participants can assess the attractiveness of the rewards once they reach the first tier.'
    },
    {
        title: 'How often are rewards issued?',
        content: <p>Participants are eligible to claim their STRK rewards via <a href='https://www.onlydust.com/' target='_blank' className='text-primary underline'>OnlyDust</a> (after completing KYC) as soon as they reach a new tier. Points and tier levels will be updated monthly.</p>
    },
    {
        title: 'Will the details of point allocation, such as weights for different platforms and inactivity penalties, be shared?',
        content: 'The exact point allocation for each platform and activity will not be transparent to avoid gamification. It aims to be fair and highly individualized. Generally, a chat message will have a lower weight than a blog post or YouTube video. Best practices will be coached in a new role-gated WPL channel on Discord.'
    },
    {
        title: 'Is there a time limit for claiming rewards?',
        content: 'There is no time limit. Participants who reach a certain tier must claim rewards on OnlyDust after completing KYC and creating a GitHub account.'
    }
    ,
    {
        title: 'Is there a channel for participants to appeal if they feel points have been allocated incorrectly?',
        content: <p>All communication related to the program will take place in the new role-gated WPL channel on <a href='https://starknet.io/discord' target='_blank' className='text-primary underline'>Starknet Discord</a>.</p>
    }
    
]

const LM_Faq = () => {

  

    // const [faq, setFaq] = useState([])
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const getFaqs = async () => {
    //         setIsLoading(true);
    //         try {
    //             const response = await fetch(`${BASE_URL}/faq/learn_more`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 }
    //             })
    //             const faq = await response.json();
    //             setFaq(faq?.data);
    //         } catch (error) {
    //             console.log('error fetching faq learn more', error);
    //         } finally{
    //             setIsLoading(false);
    //         }
    //     }
    //     getFaqs();
    // }, [])

    // const convertStringToJSX = (str) => {
    //     const modifiedString = str.replace(/<a /g, '<a target="_blank" class="text-primary" ');
    //     return parse(modifiedString);
    // }


  return (
    <div className='flex flex-col items-start  md:min-h-[110vh] mb-10'>
        {/* {isLoading ? <div className='text-white text-[14px] md:text-[16px] font-inter'>Loading...</div> : */}
            <div className='w-full mt-6'>
                <Accordion type="single" collapsible>
                    {!faq.length ? <p className='text-white/50'>No FAQs Found</p> : faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} data-aos="fade-up" data-aos-delay={`${(400) + index}`} data-aos-duration="700" className="border-[#E4E7EC1A] mb-4 font-inter">
                            <AccordionTrigger className="text-white text-left text-[14px] md:text-[18px] leading-[28px] font-medium hover:no-underline">{item.title}</AccordionTrigger>
                            <AccordionContent className="text-white/80 text-[12px] md:text-[16px] leading-[24px] w-[97%]">
                                {/* {convertStringToJSX(item.content)}                                */}
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}             
                </Accordion>
            </div>
        {/* } */}
    </div>
  )
}

export default LM_Faq