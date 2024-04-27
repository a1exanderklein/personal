import { useEffect, useRef } from 'react';

const AnimatedText = ({ initialText }) => {
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
                                return initialText[index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("");

                    if (iteration >= initialText.length) {
                        clearInterval(intervalRef.current);
                    }

                    iteration += 1 / 3;
                }, 150 / initialText.length);
            }, 100); // Delay before starting the animation (300 milliseconds)
        };

        const handleMouseOut = () => {
            clearTimeout(timeoutRef.current); // Clear the timeout if mouse leaves before the animation starts
            clearInterval(intervalRef.current);
            element.innerText = initialText;
        };

        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);

        return () => {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
            element.removeEventListener("mouseover", handleMouseOver);
            element.removeEventListener("mouseout", handleMouseOut);
        };
    }, [initialText]);

    return <a ref={elementRef} href="/#">{initialText}</a>;
};

export default AnimatedText;
