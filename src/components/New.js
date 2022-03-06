import React from 'react';

const New = ({ num }) => {
    const { urlToImage, url, title, description, source } = num;
    const image = (urlToImage) ?
        <div className='flex flex-wrap justify-center'>
            <img src={urlToImage} alt={title} className='p-1 bg-white border rounded'/>
            <div class="px-6 py-1">
            <span className='font-bold text-xl mb-2'>{source.name}</span>
            </div>
        </div>

        : null;
    return (
     
            <div
            className='rounded overflow-hidden shadow-lg'
           
            >
                {image}
                <div className='px-4'>
                    <h3 className='text-slate-900 dark:text-dark mt-5 text-base font-medium'>{title}</h3>
                    <p className='text-slate-500 dark:text-slate-400 mt-2 text-sm'>{description}</p>
                </div>
                <div className='flex justify-end my-4'>
                    <a href={url} target='_blank' rel='noopener noreferrer'
                        className='text-md font-medium text-slate-500 px-4 hover:text-cyan-500'
                    >see full storys</a>
                </div>
            </div>
   
    )
}

export default New;