import React from 'react';
import './about.css';
import aboutImg from '../../assets/images/about.png';

const About = () => {
    return (
        <>
            <div className='about_Container'>
                <div className='about_info'>
                    <h1>About us</h1>
                    <div className='underline'></div>
                    <div className='content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor turpis sit amet dui scelerisque, a fringilla odio pellentesque. Mauris a nunc in nibh tempor mattis. Cras volutpat aliquet congue. Donec aliquam ante vel ante finibus cursus. Morbi ultricies diam risus, sed interdum nibh rhoncus at. Donec blandit arcu felis. Vivamus varius diam id hendrerit malesuada. Vestibulum eu dolor sed ex imperdiet vehicula ac et sapien. Curabitur pulvinar varius erat at rutrum. Praesent vitae odio vestibulum, accumsan neque ut, congue tellus. Nunc nec blandit dolor. Ut non purus eget nisl auctor vehicula. Vivamus fringilla velit id tempor imperdiet. Nulla facilisi.
                    

                        Donec dignissim, est ultricies dapibus pulvinar, quam risus pretium quam, ac lobortis elit tellus eu leo. Proin quis felis dapibus, faucibus felis sed, consectetur lacus. Nullam varius dui quis tortor accumsan, vel ullamcorper mauris ullamcorper. Nulla scelerisque tellus rhoncus sem ornare malesuada. Morbi tempor cursus ante, vel maximus purus. Nam placerat eleifend enim bibendum feugiat. Morbi hendrerit sagittis ullamcorper. In iaculis, nunc nec elementum hendrerit, libero lectus tristique felis, non placerat lorem arcu at tellus.</p>
                        <img src={aboutImg} alt='about' className='about_img' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About