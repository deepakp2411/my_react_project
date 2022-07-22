import React from 'react';
import scootyLogo from '../../assets/images/scooty.png';
import './scooty.css';
import googlePlay from '../../assets/images/google-play.png';
import appleStore from '../../assets/images/app-store.png';
import playButton from '../../assets/images/play-button.png';

const Scooty = () => {
  return (
    <>
        <div className='scooty_Container'>
            <img src={scootyLogo} alt='scootyLogo' className='scooty' />
            <div className='social'>
            <div className='google_PlayStore'>
                <img src={googlePlay} alt='google_Play' className='google' />
                <p>Get it from</p>
                <h2>Google Play</h2>
            </div>
            <div className='apple_Store'>
                <img src={appleStore} alt='google_Play' className='apple' />
                <p>Get it from</p>
                <h2>App Store</h2>
            </div>
            <div className='play_Button'>
                <img src={playButton} alt='google_Play' className='play_button' />
                <h3>Watch Video</h3>
            </div>

            </div>
            
        </div>
    </>
  )
}

export default Scooty