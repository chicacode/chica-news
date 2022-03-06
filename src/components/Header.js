import React from 'react'


const Header = ({ title }) => {
    return (
            <div className="hidden w-full md:flex md:items-center md:w-auto">
                <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
                    <li><a href="sass.html" className='md:p-4 py-2 block hover:text-slate-700'>{title}</a></li>
                    <li><a href="badges.html" className='md:p-4 py-2 block hover:text-slate-700'>International</a></li>
                    <li><a href="collapsible.html" className='md:p-4 py-2 block hover:text-slate-700'>Today's Paper</a></li>
                    <li><a href="badges.html" className='md:p-4 py-2 block hover:text-slate-700'>World News</a></li>
                    <li><a href="collapsible.html" className='md:p-4 py-2 block hover:text-slate-700'>More</a></li>
                </ul>
            </div>
 
    );
}

export default Header;