import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contactform'>
        <h3>Contact Me</h3>
        <form action="">
           
            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Name' required />
            <label htmlFor="">Email: </label>
            <input type="e-mail" placeholder='Email' required />
            <label htmlFor="">Message: </label>
            <input className='message' type="text" placeholder='Write message' required />
            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm