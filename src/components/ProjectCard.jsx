import React from 'react';

function ProjectCard({ title, type, date, languages }) {
  return (
    <div className='flex-column text-center justify-center align-center col-span-2 space-y-2'>
      <p className='md:text-4xl text-2xl'>
        {title}
      </p>
      <p className='md:text-2xl text-xl'>
        {type}
      </p>
      <p className='md:text-md text-sm'>
        {date}
      </p>
      <p className='md:text-2xl text-xl space-x-2 flex text-center justify-center align-center'>
        {languages}
      </p>
    </div>
  );
}

export default ProjectCard;
