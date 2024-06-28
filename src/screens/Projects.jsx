import { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import ProjectCard from '../components/ProjectCard';
import { SiCoursera, SiCplusplus, SiCss3, SiGooglegemini, SiHtml5, SiJavascript, SiOpenai, SiPython, SiReact } from "react-icons/si";

function Projects() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollText, setShowScrollText] = useState(true);

  const projects = [
    {
      title: "Solace",
      type: "Mobile App/AI",
      date: "02.24 — 04.24",
      languages: <><SiReact /><SiJavascript /><SiGooglegemini/></>,
    },
    {
      title: "File System",
      type: "Operating Systems",
      date: "04.24",
      languages: <><SiCoursera/><SiCplusplus /></>,
    },
    {
      title: "Memory Manager",
      type: "Memory Management",
      date: "04.24",
      languages: <><SiCoursera/><SiCplusplus /></>,
    },
    {
      title: "ACM Website",
      type: "Web Development",
      date: "01.24 — 03.24",
      languages: <><SiReact /><SiJavascript /></>,
    },
    {
      title: "Chess Analyzer",
      type: "Data Analysis",
      date: "11.23 — 12.23",
      languages: <SiPython />,
    },
    {
      title: "Phone Guru",
      type: "Web Development/AI",
      date: "10.23",
      languages: <><SiPython /><SiHtml5/><SiCss3/><SiJavascript/><SiOpenai/></>,
    },
    {
      title: "AVL Tree",
      type: "Data Structures",
      date: "9.23",
      languages: <SiCplusplus />,
    },
    {
      title: "Minesweeper",
      type: "Game Development",
      date: "07.23 — 08.23",
      languages: <SiCplusplus />,
    },
    {
      title: "Sudoku Generator",
      type: "Game Development",
      date: "11.23 — 12.23",
      languages: <SiPython />,
    },
  ];

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
        <div className='flex w-screen h-screen flex items-center justify-center'> 
          <h1 className='text-[14vw] uppercase'>Projects</h1>
        </div>
        <div className='bg-[#F8F9FA] py-10 md:py-24'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            <div className='rounded col-span-1'>
              <ProjectCard/>
            </div>
          </div>
          <div className='pt-10 md:pt-24 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            {projects.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                type={item.type}
                date={item.date}
                languages={item.languages}
              />
            ))}
          </div>
          <div className='pt-10 md:pt-24 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-20 px-10 md:px-24 w-full justify-around'>
            <div className='col-span-4'>
              <p className='text-lg'>
                A key aspect of our design approach for Givenchy's website was to create a clean and minimal aesthetic that emphasized the brand's products and storytelling.
              </p>
              <p className='text-lg'>
                The new site leverages the monogram and logotype to frame all content, layering in branding with the streamlined, minimal design. One of the most exciting aspects of designing Givenchy's website was working closely with the brand's Creative Director and capture his vision into a unique digital Projects. The result was an elevated digital Projects that reflected Givenchy's unique personality and inspired its audience to engage with the brand on a deeper level.
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

export default Projects;
