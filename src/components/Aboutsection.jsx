import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'


const BentoTilt = ({ children, className = ''}) =>{

    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef();
    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const{left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX-left) / width;
        const relativeY = (e.clientY-top) / height;

        const tiltX = (relativeY - 0.5) * 8;
        const tiltY = (relativeX - 0.5) * -8;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

        


        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description}) =>{
    return(
        <div className="relative size-full">
            <video 
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
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
            {title}
        </div>
    )
}

const Features = () => {
  return (
    
    <section className=''>
        <div className='container mx-auto px-3 md:px-10'>
                                <div className='flex size-full mb-10 mt-10 rounded-md flex-col justify-between text-5xl'>
                                    <h1 className='bento-title special-font max-w-64'>
                                        <b>M</b>ine <b></b> 
                                        <small><small className='text-gray-500  opacity-25'>thing!</small></small>
                                        
                                    </h1>
                                    <p className='text-ellipsis text-gray-400 font-extralight animate-pulse'>" blend design, motion, and interaction to craft engaging digital experiences.
                                            With a keen eye for detail and a passion for innovation,  create visuals that are not just seen but felt.
                                            work is driven by precision, creativity, and a constant push for improvement, ensuring seamless and immersive user experiences."</p>
                                </div>
                            
                    <div className=' grid h-[50vh] grid-cols-3 grid-rows-1 gap-7'>
                            

                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 '>
                         <BentoCard
                            src="videos/feature-4.mp4"                            
                            title={<>WEB <b>D</b>eveloper</>}
                            description="Building dynamic, responsive, and visually engaging web experiences."
                         />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_1  me-14  md:col-span-1 md:me-0'>
                         <BentoCard
                            src="videos/feature-3.mp4"
                            title={<><b>UI</b> Disign</>}
                            description="Crafting intuitive and visually compelling interfaces for seamless user experiences."
                         />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_2  me-14  md:col-span-1 md:me-0'>
                        <div className='flex size-full flex-col bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64'>
                                <b>I</b>llustrator.<b></b>
                            </h1>
                            <p className='mt-0 max-w-64 text-xs md:text-base lg:text-lg'>
                                An illustrator with a passion for blocky and colored visuals.</p>

                        </div>
                    </BentoTilt>

            </div>
        </div>
    </section>
  )
}

export default Features