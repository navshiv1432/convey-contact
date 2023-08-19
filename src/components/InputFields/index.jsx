import React from 'react'
import './index.css'


const InputFields = () => {
  return (
    <div className='input-fields-container'>
       <h2>We'd love to hear from you</h2>
       <div className='input-fields'>
            <input type="text" placeholder='Name*' className='input-field'/>
            <input type="number" placeholder='Mobile*' className='input-field'/>
            <input type="email" placeholder='Email*' className='input-field'/>
            <input type="text" placeholder='Location*' className='input-field'/>
       </div>
      <textarea cols="80" rows="8" placeholder='Message*' className='text-area'></textarea>
      <p className='span-text'><span className='span-heading'>Disclaimer:</span> I authorize BHR Group and its representatives to Call, SMS,
       Email or WhatsApp me about its products and offers. This consent overrides any registration for DND / NDNC.</p>
       <div className='submit-button-container'>
       <button className='submit-button' type='button'>Submit</button>
       </div>
    </div>
  )
}

export default InputFields