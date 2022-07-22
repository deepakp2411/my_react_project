import React from 'react';
import './home.css';
import homeLogo from '../../assets/images/home.png';


const Home = () => {
  return (
    <>
        <div className='home_container'>      
        <img  src={homeLogo} alt='homeLogo' className='home_Logo' />      
        </div>
    </>
  )
}

export default Home