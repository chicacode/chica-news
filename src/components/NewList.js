import React from 'react';
import New from './New';

const NewList = ({ news }) => {
    return (
        <div className='p-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            {news?.map((num) =>
               <New  key={num.url} num={num} />
            )}

        </div>
    )
}


export default NewList;