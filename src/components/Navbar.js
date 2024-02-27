import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './button-1';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
        setButton(false);
    }else {
        setButton(true);
    }
    }
useEffect(() => {
    showButton ()
}, [])
window.addEventListener('resize', showButton);


  return (
    
<>
<nav className="navbar">
<div className="navbar-container">
    <Link to="/" className="navbar-logo">
        Xventure <i class="fa-solid fa-earth-americas"></i>
    </Link>
    <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                Adventure Packages
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                    Gallery
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/Book' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Book
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>BOOK</Button>}
</div>
</nav>
</>
  )
}

export default Navbar