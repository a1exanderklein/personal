import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ title, link, handleTransition }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        handleTransition();
        setTimeout(() => {
            navigate(link);
        }, 1000); // Match the timeout duration to the transition duration
    };

    return (
        <section className="relative z-20 pointer-events-none">
            <div className="px-gx md:h-[33vh] h-[70vh] flex justify-center items-center transition-transform duration-1000">
                <h2 className="w-10/12 text-center text-[14.8vw] uppercase">
                    <a href={link} onClick={handleClick} className="pointer-events-auto text-center flex items-center justify-center text-white">
                        {title}
                    </a>
                </h2>
            </div>
        </section>
    );
}

export default Header;
