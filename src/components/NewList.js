import React from 'react';
import New from './New';

const NewList = ({news})=>(
    <div className='container'>

{news.map((num) => <New key={num.url} num={num}/>)};

    </div>
);

export default NewList;