import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle.jsx'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RoundedCorners from './RoundedCorners.jsx';
import Button from './Button.jsx';

const Story = () => {
    const frameRef = useRef('null');

    const handleMouseLeave = () => {

        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX:0 ,
            rotateY:0 ,
            ease: 'power1.inOut'
        })
    }
    
    const handleMouseMove = (e) => {
        const {clientX,clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        gsap.to(element, {
            duration: 0.6,
            rotateX,rotateY,
            tranformPerspective:500,
            ease: 'power1.inOut'
        })
    }


  return (
    <section  id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
        

            <div className='relative size-full '>
                <AnimatedTitle 
                    title="MY  <br/> RESUME"
                    sectionId = "#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img 
                            ref={frameRef} 
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            src="/img/resumeimg.jpg" 
                            alt="entrance" 
                            className='object-container' 
                            />
                        </div>
                    </div>

                    <RoundedCorners />
                </div>
            </div>

            <div>
                    <a href="/img/SAMEER.pdf" download>
                    <Button title="Download Resume" containerClass="bg-black-500 font-bold text-black px-4 py-2 rounded-lg hover:bg-purple-600 transition-all "/>
                    </a>
                        
                
            </div>

        </div>
    </section>
  )
}

export default Story