import React from 'react';
import mobileImg from '../../assets/images/smartphone.png';
import laptopImg from '../../assets/images/laptop-screen.png';
import bloggerImg from '../../assets/images/blogger.png';
import './career.css';
import { Button } from 'bootstrap';




const Career = () => {
  return (
    <>
    <div className='career_container'>
        <div className='career_info'>
            <h1>Careers With ELV Drive</h1>
            <div className='underline_career'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum odio sit amet ligula ultrices consequat. Donec et tellus luctus mauris egestas cursus id in justo. Quisque pellente</p>
            <button className='black'>LEARN MORE</button>
        </div>
            <div className='career_infoRight'>

                <img src={mobileImg} alt='mobile' />
                <h4>Flutter Developer </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum odio sit amet ligula ultrices consequat. Donec et tellus luctus mauris egestas cursus id in justo. Quisque pellentesque ipsum eget pretium blandit</p>
                <button>APPLY</button>
                

            </div>
            <div className='career_infoRight'>
                <img src={laptopImg} alt='laptop' />
                <h4>Web Developer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum odio sit amet ligula ultrices consequat. Donec et tellus luctus mauris egestas cursus id in justo. Quisque pellentesque ipsum eget pretium blandit</p>
                <button>APPLY</button>

            </div>

            <div className='career_infoRight'>
                <img src={bloggerImg} alt='digital' />
                <h4>Digital Marketing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum odio sit amet ligula ultrices consequat. Donec et tellus luctus mauris egestas cursus id in justo. Quisque pellentesque ipsum eget pretium blandit</p>
                <button>APPLY</button>
                

            </div>
    </div>

    </>
  )
        
  }

export default Career