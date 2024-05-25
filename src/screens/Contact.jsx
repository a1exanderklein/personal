import React from 'react';
import AnimatedText from '../utils/AnimatedText';

function downloadResume() {
  // URL of the PDF file
  const pdfUrl = '/assets/resume.pdf';
  
  // Create a temporary <a> element to trigger the download
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'KleinAlexander_Resume.pdf'; // Specify the filename
  
  // Simulate a click on the link to trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  
  // Clean up resources after the download link is clicked
  document.body.removeChild(downloadLink);
}

function Contact() {
  return (
    <>
      <div className="fixed top-8 right-20 text-xs mix-blend-difference text-white">
        <AnimatedText text="CLOSE" path="/" />
      </div>
      <div className='flex flex-col items-center h-screen justify-center'>
        <section className="relative z-20 pointer-events-none">
          <div className="md:h-[20vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/12 text-center text-[10vw] uppercase">
              <a href="mailto:alexandergeorgeklein@gmail.com" className="pointer-events-auto text-center flex items-center justify-center text-white">
                EMAIL
              </a>
            </h2>
          </div>
        </section>
        <section className="relative z-20 pointer-events-none">
          <div className="md:h-[20vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/12 text-center text-[10vw] uppercase">
              <a href="https://linkedin.com/in/alexanderkleincs" className="pointer-events-auto text-center flex items-center justify-center text-white">
                LINKEDIN
              </a>
            </h2>
          </div>
        </section>
        <section className="relative z-20 pointer-events-none">
          <div className="md:h-[20vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/12 text-center text-[10vw] uppercase">
              <a href="/contact" onClick={downloadResume} className="pointer-events-auto text-center flex items-center justify-center text-white">
                RESUME
              </a>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
