import React, { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import AnimatedText from '../utils/AnimatedText';

function Info() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollText, setShowScrollText] = useState(true);

  const targetScrollPosition = 1500; // Change this value to set the point where scaling should start increasing again

  const lenis = useLenis(({ scroll }) => {
    setScrollPosition(scroll);
    setShowScrollText(scroll === 0);
  });

  let navScale;
  let navOpacity;
  if (scrollPosition <= targetScrollPosition) {
      navScale = Math.max(1 - (scrollPosition * 0.0014), 0.5); // Scale down but not below 0.7
      navOpacity = Math.max(1 - (scrollPosition * 0.002), 0.3); // Adjust opacity if needed
  } else {
      navScale = Math.min(0.7 + ((scrollPosition - targetScrollPosition) * 0.00135), 1); // Scale back up but not above 1
      navOpacity = Math.min(0.7 + ((scrollPosition - targetScrollPosition) * 0.001), 1); // Scale back up but not above 1
  }

  return (
    <ReactLenis root>
      <div className="fixed top-8 right-20 text-xs mix-blend-difference text-white">
        <AnimatedText text="CLOSE" path="/" />
      </div>
      <div className='flex flex-col items-center h-screen justify-center'>
        <section className="fixed z-20 pointer-events-none" style={{ transform: `scale(${navScale})`, opacity: navOpacity }}>
          <div className="md:h-[20vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/10 text-center text-[10vw] uppercase">
              <p className='text-white'>( Who Am I? )</p>
            </h2>
          </div>
        </section>
      </div>
      <section className="text-white py-gy flex flex-col items-center relative z-10">
        <div className=' 
          px-gx lg:w-[60%] max-w-[950px] w-[90%] flex flex-col items-center text-center uppercase

          [&>ul]:py-[40px]
          [&>ul>li]:py-[15px]

          [&>p]:max-w-[78%] [&>p]:w-[80%] [&>p]:py-[40px] md:[&>p]:max-w-[640px]

          [&>h1]:py-[85px] md:[&>h1]:py-[40px] 
          md:[&>h1]:text-[40px] [&>h1]:text-[26px] [&>h1]:leading-[1em]

          [&>h2]:py-[85px] md:[&>h2]:py-[40px] 
          md:[&>h2]:text-[40px] [&>h2]:text-[26px] [&>h2]:leading-[1em]
          '>
            <h2>INDEPENDANT DESIGNER & DIRECTOR WORKING FOR AGENCIES AND BRANDS WORLDWIDE</h2>
            <p>
              PAST EXPERIENCE
              <br />
              DESIGN DIRECTOR AT WORK AND CO, BROOKLYN ASSOCIATE DESIGN
            </p>
            <h2>BRANDING, DESIGN, MOTION, PRODUCT, DIRECTION, UX STRATEGY</h2>
            <p></p>
            <h2>ALWAYS PUTS AN EMPHASIS ON CREATING MEMORABLE EXPERIENCE THAT TRANSCENDS OBJECTIVES</h2>

        </div>
      </section>
      <figure className='h-[43vh]'></figure>
    </ReactLenis>
  );
}

export default Info;
