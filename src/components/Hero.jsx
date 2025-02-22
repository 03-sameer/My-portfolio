import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;


    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    // to load the video and check it
    useEffect(() => {
        if(loadedVideos == totalVideos - 1){
            setIsLoading(false);
        }
    })

    // gsap animation
    useGSAP( () => {
        if(hasClicked){
            gsap.set('#next-video', {visibility: 'visible', opacity:1});

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })

            gsap.from('#current-video',{
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, {dependencies:[currentIndex], revertOnUpdate:true}

    )


    // gsap hook
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(5% 10%, 90% 6%, 90% 90%, 5% 90%)',
            borderRadius: '0 0 0% 0%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',

            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center ',
                end: 'bottom center',
                scrub: true,
            }
        })
    });
    
    

    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

    const handleMouseEnter = () => {
        if (nextVideoRef.current) {
            nextVideoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (nextVideoRef.current) {
            nextVideoRef.current.pause();
            nextVideoRef.current.currentTime = 0; // Reset video to the beginning
        }
    };

    return (
        
        <div className="relative h-dvh w-screen overflow-x-hidden">

            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"/>
                        <div className="three-body__dot"/>
                        <div className="three-body__dot"/>

                    </div>
                </div>
            )}


            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                     <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">

                        <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"> 
                        
                      
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(upcomingVideoIndex)}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center "
                            onLoadedData={handleVideoLoad}
                            onMouseEnter={handleMouseEnter} // Play on hover
                        />


                    </div>
                    
                    
                </div>

                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(currentIndex)}
                            loop
                            muted
                            id="next-video"
                            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                            onLoadedData = {handleVideoLoad}
                        />

                        <video src={getVideoSrc(currentIndex == totalVideos - 1 ? 1 : currentIndex)}
                            autoPlay
                            loop
                            muted
                            className="absolute left-0 top-0 size-full object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
            </div>

            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-10 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">
                        SAMEE<b>R.</b> <small></small>
                    </h1>
                    <p className="mb-2 mt-0 max-w-64  font-robert-regular text-blue-100">
                       web developer !

                    </p>

                </div>
            </div> 
            
            </div>




            <h2 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                <b>0</b>3
            </h2>
            
            
        </div>

         
        
    );
    
};

export default Hero;
