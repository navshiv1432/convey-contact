import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import './index.css'


const ContactInfo = () => {
  return (
    <div className='contact-info-container'>
       <h2>Contact</h2>
       <p className='para'>
            Welcome to BHR properties real estate online portal! We value your feedback and inquiries. 
            Whether you're a prospective buyer, seller, or have general questions, we're here to assist you. 
            Contact our dedicated team through the information below to get in touch with us:
       </p>
       <div className='numbers-container'>
        <div className='need'>
            <FiPhone className='icons'/>
            <div className='info'>
                <h4>Customer Care :</h4>
                <p>+91 8688945694</p>
                <p>7am to 7pm</p>
            </div>
        </div>
        <div className='need'> 
           <MdOutlineEmail className='icons'/>
           <div className='info'>
                <h4>Customer Care :</h4>
                <p>+91 8688945694</p>
                <p>7am to 7pm</p>
            </div>
        </div>
       </div>
       <p className='para'>
            Don't hesitate to reach out if you need assistance with property listings, pricing,
             or any other real estate-related concerns. We strive to provide exceptional customer service and look forward to hearing from you. 
             Let us help you make your real estate dreams a reality!
       </p>
    </div>
  )
}

export default ContactInfo