import workingImg from '../../assets/images/working.png';
import './working.css';
import shield from '../../assets/images/shield-check.png'

const Working = () => {
    return (
        <>
            <div className='working_Container'>
                <div className='info'>
                    <h1>How ELV Works</h1>
                    <div className='underline'></div>
                    <div className='shield_Container'>
                    <img src={shield} alt="shield" className="shield" />
                    <h3>100% Secure Smart & Simple</h3>

                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lacus, euismod elementum posuere vitae, cursus sed tortor. Suspendisse dignissim neque eget massa condimentum sodales. Suspendisse egestas turpis elit, quis facilisis lectus rutrum sit amet. Ut feugiat sapien dolor, quis eleifend enim blandit sit amet. Sed vulputate sollicitudin suscipit. Vivamus vel nunc a orci laoreet mattis a nec lectus. Phasellus ligula turpis, ultricies us tristique. In hac habitasse platea dictumst. Etiam nisi est, commodo at convallis eget, volutpat at ligula. Praesent fermentum, diam id varius tempus, felis augue pharetra mi, quis posuere ante nibh eu lectus. Vestibulum dignissim placerat orci vitae sollicitudin. Vivamus vitae tellus eleifend, tincidunt augue eget, consequat metus
                        consectetur adipiscing elit. Duis felis lacus, euismod elementum posuere vitae, cursus sed tortor. Suspendisse dignissim neque eget massa condimentum sodales. Suspendisse egestas turpis elit, quis facilisis lectus rutrum sit amet. Ut feugiat sapien dolor, quis eleifend enim blandit sit amet. Sed vulputate sollicitudin suscipit. Vivamus vel nunc a orci laoreet mattis a nec lectus. Phasellus ligula turpis, ultricies us tristique. In hac habitasse platea dictumst. Etiam nisi est, commodo at convallis eget, volutpat at ligula. Praesent fermentum, diam id varius tempus, felis augue pharetra mi, quis posuere ante nibh eu lectus. Vestibulum dignissim placerat orci vitae sollicitudin. Vivamus vitae tellus eleifend, tincidunt augue eget, consequat metus
                        .</p>
                </div>
                <div className='img'>
                    <img src={workingImg} alt='working' className='working_Img' />
                </div>


            </div>



        </>
    )
}

export default Working