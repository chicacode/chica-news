import React from 'react';

const New = ({ num }) => {
    const { urlToImage, url, title, description, source } = num;
    const image = (urlToImage) ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title'>{source.name}</span>
        </div>

        : null;
    return (
        <div>
            <div
                className='card'
            >
                {image}
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a href={url} target='_blank' rel='noopener noreferrer'
                        className='waves-effect waves-light btn purple lighten-2'
                    >see full storys</a>
                </div>
            </div>
        </div>
    )
}

export default New;