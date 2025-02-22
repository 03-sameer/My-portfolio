import React, { useRef, useState } from 'react'
import { BiAbacus } from 'react-icons/bi';
import { DiReact } from 'react-icons/di';
import { FaSnowflake } from 'react-icons/fa';
import { GiFrontTeeth } from 'react-icons/gi';
import { PiBracketsAngle, PiBracketsAngleDuotone, PiBracketsCurlyBold } from 'react-icons/pi';
import { SiFrontendmentor } from 'react-icons/si';
import { TiLocationArrow } from 'react-icons/ti'
import { VscCode } from 'react-icons/vsc';


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
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='w-90  font-light text-5xl text-gray-500 opacity-90'>
                "I continuously explore and refine my skills in web development, UI/UX design, and interactive experiences. From mastering modern frameworks like
                React, MVC and GSAP to understanding backend architectures, version control, and deployment, I stay committed to learning and adapting to new technologies."
                </p>
            </div>
        
                    
            <div className=' h-[135]  grid  grid-cols-1 grid-rows-3 gap-7'>
                    

                    <BentoTilt className='bento-tilt_1 row-span-1  ms-32  md:ms-0'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                                <h1 className='bento-title special-font max-w-64'>
                                   FRONT <b>E</b>ND 
                                </h1>

                                <h2 className='text-3xl md:text-base pl-10'>
                               <br /> React <br />Java script<br /> Tailwind CSS <br /> GSAP <br /> Framer Motion
                                </h2>


                                <DiReact className='m-5 scale-[5] self-end'/>
                            </div>
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_3  me-14   row-span-3 md:me-0'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                        <h1 className='bento-title special-font max-w-64 '>
                                   BACK <b>E</b>ND 
                                </h1>

                                <h2 className='text-3xl md:text-base pl-10'>
                               <br /> NODE JS <br />MongoDB<br /> Git & GitHub <br /> REST API <br />
                                </h2>


                                <PiBracketsCurlyBold className='m-5 scale-[5] self-end'/>
                            </div>
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_3  me-14 row-span-3 md:me-0'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64'>
                                DESIGN & UI/UX
                            </h1>

                            <h2 className='text-3xl md:text-base pl-10'>
                               <br /> Adobe Illustrator <br />Adobe Photoshop<br /> Figma 
                                </h2>

                            <FaSnowflake className='m-5 scale-[5] self-end'/>
                        </div>
                    </BentoTilt>

                    
            </div>
        </div>
    </section>
  )
}

export default Features