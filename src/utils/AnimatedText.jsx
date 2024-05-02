import { useEffect, useRef } from 'react';

const AnimatedText = ({ text, path }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const elementRef = useRef(null);
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const handleMouseOver = () => {
            clearTimeout(timeoutRef.current); // Clear any existing timeout
            timeoutRef.current = setTimeout(() => { // Set a new timeout
                let iteration = 0;
                clearInterval(intervalRef.current);

                intervalRef.current = setInterval(() => {
                    element.innerText = element.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("");

                    if (iteration >= text.length) {
                        clearInterval(intervalRef.current);
                    }

                    iteration += 1 / 3;
                }, 150 / text.length);
            }, 100); // Delay before starting the animation (300 milliseconds)
        };

        const handleMouseOut = () => {
            clearTimeout(timeoutRef.current); // Clear the timeout if mouse leaves before the animation starts
            clearInterval(intervalRef.current);
            element.innerText = text;
        };

        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);

        return () => {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
            element.removeEventListener("mouseover", handleMouseOver);
            element.removeEventListener("mouseout", handleMouseOut);
        };
    }, [text]);

    return <a ref={elementRef} href={path}>{text}</a>;
};

export default AnimatedText;
