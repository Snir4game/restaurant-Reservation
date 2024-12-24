import { useState } from "react";

const NavBar = () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
       <nav className="horizontal-nav">
        <div className="brand">
            <a href="">Logo</a>
        </div>
        <ul className="nav-Menu">
            <li className={activeItem === 'home' ? 'active' : ''}>
                <a href="" onClick={() => setActiveItem('home')}>Home</a>
            </li>
            <li className={activeItem === 'about' ? 'active' : ''}>
                <a href="" onClick={() => setActiveItem('about')}>About</a>
            </li>
            <li className={activeItem === 'services' ? 'active' : ''}>
                <a href="" onClick={() => setActiveItem('services')}>Services</a>
            </li>
            <li className={activeItem === 'contact' ? 'active' : ''}>
                <a href="" onClick={() => setActiveItem('contact')}>Contact</a>
            </li>
        </ul>
        <div className="nav-actions">
            <button className="signInBtn">Sign in</button>
        </div>
       </nav>
    )
}

export default NavBar;