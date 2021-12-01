import { useState } from "react";
import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.React_App_SERVICE_ID, process.env.React_App_TEMPLATE_ID, form.current, process.env.React_App_USER_ID)
      .then((result) => {
          console.log(result.text);
          setMessage(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Let's connect!</h2>
        <form ref={form} onSubmit={sendEmail}>
            
            <input type="text" name="user_name" placeholder="Your Name" />
            <input type="email" name="user_email" placeholder="Your Email"/>
            <textarea name="message" placeholder="Enter a message"/>
            <button type="submit">Send</button>
            {message && <span>Thank you for reaching out! I will get back to you soon :)</span>}
        </form>
      </div>
    </div>
  );
}