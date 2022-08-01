import React from 'react';
import contactImg from '../../assets/images/delivery-bike.png';
import './contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact_container'>
                <div className=' contact_info'>
                    <h1 className='h1 text-white'>Connect With Us</h1>
                    <div className='contact_underline'></div>
                    <p>lorem ipsum dolarLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet gravida justo. Aliquam neque dolor, venenatis nec odio id, malesuada consectetur leo. Cras et mauris suscipit, vehicula nibh eget, accumsan justo. Nam </p>
                    <img src={contactImg} className='contact_img' alt='connect' />
                </div>
                <div className='contact_form'>
                    <form className='contact_form_groups' >
                        <div className="form_group">
                            <input type='text' placeholder='Full Name*' />
                        </div>
                        <div className="form_group">
                            <input type='text' placeholder='Mobile Number*' />
                        </div>
                        <div className="form_group">
                            <input type='email' placeholder='Email ID*' />
                        </div>
                        <div className="form_group">
                            <input type='text' placeholder='Location*' />
                        </div>
                        <div className="form_group">
                            <input type='text' placeholder='Subject*' />
                        </div>
                        <div className="form_group">
                            <textarea placeholder='Message' className='text_area' />
                        </div>
                        <button className='form_btn'>SUBMIT</button>
                    </form>
                </div>



            </div>
        </>

    )
}

export default Contact