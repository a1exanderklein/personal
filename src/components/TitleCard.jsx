import { useState, useEffect } from 'react';
import AnimatedText from '../utils/AnimatedText';
import Header from './Header';

function TitleCard() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showScrollText, setShowScrollText] = useState(true);
    const [isSpinning, setIsSpinning] = useState(false); // State variable to track spinning

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            setShowScrollText(position === 0); // Show text only when at the top of the page
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navScale = 1 - (scrollPosition * 0.0005); // Adjust the scale factor as needed
    const navOpacity = 1 - (scrollPosition * 0.001); // Adjust the opacity factor as needed

    const handleSVGClick = () => {
        setIsSpinning(true); // Set spinning state to true
        setTimeout(() => {
            setIsSpinning(false); // Set spinning state back to false after 2 seconds
        }, 1500);
    };

    return (
        <>
            <div className="title fixed w-screen h-screen flex justify-center items-center z-10 text-[16px] scale-110 xxl:scale-[135%] leading-5">
                <nav className="flex flex-col w-[17em] overflow-hidden whitespace-nowrap anim" style={{ transform: `scale(${navScale})`, opacity: navOpacity }}>
                    <div className="flex justify-between items-center">
                        <h1 className="font-normal">ALEXANDER KLEIN</h1>
                        <div className="h-[.9em] w-[.9em] align-center" onClick={handleSVGClick}> {/* Add click event handler */}
                            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} className={isSpinning ? "spin" : ""}> {/* Add class based on spinning state */}
                                <path fill="#fff" stroke="#000" strokeWidth={.3} d="m9.145 7.98 3.069 4.394-2.019 1.415-3.07-4.638-.124-.188-.126.188-3.07 4.589-2.02-1.415 3.021-4.346.116-.167-.193-.061-4.54-1.444.745-2.341L5.57 5.602l.2.071V.15H8.18v5.522l.2-.07 4.685-1.636.745 2.34-4.588 1.445-.195.06.117.168Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="w-[15.8em]">
                        <h2>UNIVERSITY OF FLORIDA STUDENT</h2>
                    </div>
                    <div className="flex justify-between">
                        <p>05.26</p>
                        <p>—</p>
                        <p>COMPUTER SCIENCE</p>
                    </div>
                    <div className="flex justify-between"></div>
                    <ul className="flex justify-between mt-5">
                        <li>
                            <AnimatedText initialText="INFO" />
                        </li>
                        <li>
                            <AnimatedText initialText="CONTACT" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <figure data-track="nav" class="h-[120vh] flex items-end justify-center pb-[20vh]">
                    {showScrollText && <p data-a="scrollExp" class="scrollExp fixed text-[10px] pb-5 text-white">SCROLL TO EXPLORE</p>}
                </figure>
                <Header title="Experience" link=""/>
                <Header title="Projects" link=""/>
                <Header title="Leadership" link=""/>
                <figure data-track="nav" class="h-[120vh] flex items-end justify-center pb-[20vh]"></figure>
            </div>
        </>
    );
}

export default TitleCard;
