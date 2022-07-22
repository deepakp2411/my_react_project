import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <header>
        <img  className='nav_Logo' alt='nav_Logo'/>
        <nav>
            <ul className='nav__Links'>
            <li className='active'><a href='#home'>Home</a></li>
            <li><a href='#working'>Working</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#places'>Places</a></li>
            <li><a href='#career'>Career</a></li>
            <li><a href='#review'>Review</a></li>
            <li><a href='#contact us'>Contact Us</a></li>
            <li><a href='#invest'>Invest</a></li>

            </ul>
        </nav>
    </header>

    </>
  )
}

export default Navbar