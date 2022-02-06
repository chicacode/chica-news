import React from 'react'


const Header = ({ title }) => {
    return (
        <nav>
            <div className="nav-wrapper purple accent-2">
                <a href="!#" className="brand-logo" alt="link logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">{title}</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;