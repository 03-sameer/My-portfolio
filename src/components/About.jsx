import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const BentoCard = ({ src, title, description, id }) => {
    return (
        <div className="relative size-full" id={id}>
            <video 
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5  text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const About = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        // Animation for the first video
        gsap.to("#clip-1 .mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            scrollTrigger: {
                trigger: "#clip-1",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });
    
        // Animation for the second video
        gsap.to("#clip-2 .mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            scrollTrigger: {
                trigger: "#clip-2",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });
    });
    

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[20px]'>
                    portfolio
                </h2>
                <AnimatedTitle 
                    title="-- WANDERLUST --<br/> Developed projects that merge purpose with functionality" 
                    containerClass="mt-5 !text-black text-center" />
                <div className='relative mb-1 mt-1 flex flex-col items-center gap-0  text-gray-500'>
                    <a href="https://wanderlust-0e2d.onrender.com/listings" target="_blank" rel="noopener noreferrer" className='text-purple-500'>
                        <p> Built Wanderlust using MERN stack, MVC architecture, cloud storage, Git, and GitHub for a scalable and seamless experience.
                        </p>
                    </a>
                   
                </div>
            </div>
            
            {/* First  Video */}
            <div className='h-dvh w-screen ' id='clip-1'>
                <div className='mask-clip-path about-image '>
                    <BentoCard
                        src="videos/feature-1.mp4"
                        id='clip-1-content'
                    />
                </div>
            </div>
            

            {/* second description */}
            <div className='relative mb-8 mt-16 flex flex-col items-center gap-5'>
                <AnimatedTitle 
                    title="-- SPOTIFY UI -- <br/> Recreated Spotify’s frontend with a focus on UI/UX, ensuring a responsive and visually accurate design." 
                    containerClass="mt-5 !text-black text-center" />
                <div className='relative mb-1 mt-1 flex flex-col items-center gap-0 text-gray-500'>
                    <a href="https://main--spotify-clone03.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-purple-500'>
                        <p>Desgined Spotify’s UI with React, Tailwind CSS, and API integration for a seamless, responsive experience.</p>
                    </a>
                    
                </div>
            </div>


            {/* Second Video */}
            <div className='h-dvh w-screen' id='clip-2'>
                <div className='mask-clip-path about-image'>
                    <BentoCard
                        src="videos/feature-2.mp4"
                        id='clip-2-content'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
