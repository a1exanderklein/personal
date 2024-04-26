import { useEffect, useRef } from 'react';

const AnimatedText = ({ initialText }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const elementRef = useRef(null);
    let interval = null;

    useEffect(() => {
        const element = elementRef.current;

        const handleMouseOver = () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
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
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 150/initialText.length);
        };

        const handleMouseOut = () => {
            clearInterval(interval);
            element.innerText = initialText;
        };

        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);

        return () => {
            clearInterval(interval);
            element.removeEventListener("mouseover", handleMouseOver);
            element.removeEventListener("mouseout", handleMouseOut);
        };
    }, [initialText]);

    return <a ref={elementRef} href="#">{initialText}</a>;
};

export default AnimatedText;
