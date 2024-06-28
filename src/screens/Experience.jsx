import { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

function Experience() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollText, setShowScrollText] = useState(true);

  const lenis = useLenis(({ scroll }) => {
    setScrollPosition(scroll);
    setShowScrollText(scroll === 0);
  });

  useEffect(() => {
    // Set the body background color when the component mounts
    document.body.style.backgroundColor = 'rgb(238, 238, 234)';
    
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Reset the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <ReactLenis root>
      <div className='text-black'>
        {/* Title Section */}
        <div className='flex w-screen h-screen flex items-center justify-center'> 
          <h1 className='text-[14vw] uppercase'>Experience</h1>
        </div>
        {/* Content Section */}
        <div className='bg-[#F8F9FA] py-10 md:py-24'>
          {/* Introduction Row */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            <div className='rounded col-span-2 '>
              <p className='md:text-5xl text-2xl'>
                Driven by human interaction, continuous improvement, & the idea of learning forever
              </p>
            </div>
            <div className='rounded col-span-2 '>
              <p className='text-lg'>
                A key aspect of our design approach for Givenchy's website was to create a clean and minimal aesthetic that emphasized the brand's products and storytelling.
              </p>
              <p className='text-lg'>
                The new site leverages the monogram and logotype to frame all content, layering in branding with the streamlined, minimal design. One of the most exciting aspects of designing Givenchy's website was working closely with the brand's Creative Director and capture his vision into a unique digital experience. The result was an elevated digital experience that reflected Givenchy's unique personality and inspired its audience to engage with the brand on a deeper level.
              </p>
            </div>
          </div>
          {/* Experience Row */}
          <div className='pt-10 md:pt-24 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            <div className='col-span-2 space-y-2'>
              <p className='md:text-5xl text-2xl'>
                Akima
              </p>
              <p className='md:text-3xl text-xl'>
                Software Engineer Intern
              </p>
              <p className='md:text-lg text-sm'>
                06.24 — 08.24
              </p>
            </div>
            <div className='col-span-4 '>
              <p className='text-lg text-right'>
                A key aspect of our design approach for Givenchy's website was to create a clean and minimal aesthetic that emphasized the brand's products and storytelling.
              </p>
              <p className='text-lg text-right'>
                The new site leverages the monogram and logotype to frame all content, layering in branding with the streamlined, minimal design. One of the most exciting aspects of designing Givenchy's website was working closely with the brand's Creative Director and capture his vision into a unique digital experience. The result was an elevated digital experience that reflected Givenchy's unique personality and inspired its audience to engage with the brand on a deeper level.
              </p>
            </div>
          </div>
          {/* Experience Row 2 */}
          <div className='pt-10 md:pt-24 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            <div className='col-span-4 '>
              <p className='text-lg'>
                A key aspect of our design approach for Givenchy's website was to create a clean and minimal aesthetic that emphasized the brand's products and storytelling.
              </p>
              <p className='text-lg'>
                The new site leverages the monogram and logotype to frame all content, layering in branding with the streamlined, minimal design. One of the most exciting aspects of designing Givenchy's website was working closely with the brand's Creative Director and capture his vision into a unique digital experience. The result was an elevated digital experience that reflected Givenchy's unique personality and inspired its audience to engage with the brand on a deeper level.
              </p>
            </div>
            <div className='col-span-2 space-y-2'>
              <p className='md:text-5xl text-2xl text-right'>
                UF ACM
              </p>
              <p className='md:text-3xl text-xl text-right'>
                Design Team Lead
              </p>
              <p className='md:text-lg text-sm text-right'>
                01.24 — 04.24
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default Experience;
