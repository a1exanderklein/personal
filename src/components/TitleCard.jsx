import { useState, useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import AnimatedText from '../utils/AnimatedText';
import Header from './Header';

function TitleCard() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showScrollText, setShowScrollText] = useState(true);
    const [isSpinning, setIsSpinning] = useState(false);

    const targetScrollPosition = 1500; // Change this value to set the point where scaling should start increasing again

    const lenis = useLenis(({ scroll }) => {
        setScrollPosition(scroll);
        setShowScrollText(scroll === 0);
    });

    let navScale;
    let navOpacity;
    if (scrollPosition <= targetScrollPosition) {
        navScale = Math.max(1 - (scrollPosition * 0.00135), 0.7); // Scale down but not below 0.7
        navOpacity = Math.max(1 - (scrollPosition * 0.001), 0.5); // Adjust opacity if needed
    } else {
        navScale = Math.min(0.7 + ((scrollPosition - targetScrollPosition) * 0.00135), 1); // Scale back up but not above 1
        navOpacity = Math.min(0.5 + ((scrollPosition - targetScrollPosition) * 0.001), 1); // Scale back up but not above 1
    }

    const handleSVGClick = () => {
        setIsSpinning(!isSpinning);
    };

    return (
        <ReactLenis root>
            <div className="title fixed w-screen h-screen flex justify-center items-center z-10 text-[16px] scale-110 xxl:scale-[135%] leading-5">
                <nav className="flex flex-col w-[17em] overflow-hidden whitespace-nowrap anim" style={{ transform: `scale(${navScale})`, opacity: navOpacity }}>
                    <div className="flex justify-between items-center">
                        <h1 className="font-normal">ALEXANDER KLEIN</h1>
                        <div className="h-[.9em] w-[.9em] align-center" onClick={handleSVGClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} className={isSpinning ? "spin" : ""}>
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
                            <AnimatedText text="INFO" path="/info"/>
                        </li>
                        <li>
                            <AnimatedText text="CONTACT" path="/contact"/>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <figure data-track="nav" className="h-[120vh] flex items-end justify-center pb-[20vh]">
                    {showScrollText && <p data-a="scrollExp" className="scrollExp z-20 fixed text-[10px] pb-5 text-white">SCROLL TO EXPLORE</p>}
                </figure>
                <Header title="Experience" link="/experience"/>
                <Header title="Projects" link="/projects"/>
                <Header title="Leadership" link="/leadership"/>
                <figure data-track="nav" className="h-[120vh] flex items-end justify-center pb-[20vh]"></figure>
            </div>
        </ReactLenis>
    );
}

export default TitleCard;
