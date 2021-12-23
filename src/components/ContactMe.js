import React, { useRef, useState } from 'react';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactMe() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const form = useRef();

    const updateName = (event) => {
        setUserName(event.target.value);
    }

    const updateEmail = (event) => {
        setUserEmail(event.target.value);
    }

    const updateEmailBody = (event) => {
        setEmailBody(event.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // prevent empty value submission
        if (userName.length === 0 || userEmail.length === 0) return;
        

        emailjs.sendForm('service_qjs3csf', 'template_jrcc4pd', form.current, 'user_rryPpYbg1mOOJvsmPMrUh')
        .then((result) => {
            if (result.text === "OK") {
                toast.success("Email Sent!");
                setUserName("");
                setUserEmail("");
                setEmailBody("");
            }
        }, (error) => {
            // window.alert(error.text);
            toast.error("Error sending email!");
        });
    }

    return (
        <div>
        <ToastContainer 
            hideProgressBar={true}
        />
        <form ref={form} onSubmit={sendEmail} autoComplete='off'>
            <input type="text" placeholder="Full name" name="user_name" value={userName} onChange={updateName}/>

            <input type="email" placeholder="Email address" name="user_email" value={userEmail} onChange={updateEmail} />

            <textarea placeholder="Message" name="message" value={emailBody} onChange={updateEmailBody}></textarea>

            <input type='submit' value="SEND MESSAGE" />
        </form>
        </div>
    )
}