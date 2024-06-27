import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import for React Router v6

function Header(item) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate(); // Updated navigation hook

    const handleClick = (e) => {
        e.preventDefault();
        setIsTransitioning(true);
        setTimeout(() => {
            navigate(item.link); // Updated navigation function
        }, 1000); // Adjust the timeout duration to match the transition duration
    };

    return (
        <section className="relative z-20 pointer-events-none">
            <div className={`px-gx md:h-[33vh] h-[70vh] flex justify-center items-center transition-transform duration-1000 ${isTransitioning ? 'slide-up' : ''}`}>
                <h2 className="w-10/12 text-center text-[14.8vw] uppercase">
                    <a href={item.link} onClick={handleClick} className="pointer-events-auto text-center flex items-center justify-center text-white">
                        {item.title}
                    </a>
                </h2>
            </div>
        </section>
    );
}

export default Header;
