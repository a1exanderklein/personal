import React from 'react';
import AnimatedText from '../utils/AnimatedText';

function Info() {
  return (
    <>
      <div className="fixed top-8 right-20 text-xs mix-blend-difference text-white">
        <AnimatedText text="CLOSE" path="/" />
      </div>
      <div className='flex flex-col items-center h-screen justify-center'>
        <section className="relative z-20 pointer-events-none">
          <div className="md:h-[20vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/10 text-center text-[10vw] uppercase">
              <p className='text-white'>( Who Am I? )</p>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Info;
