import emailjs from 'emailjs-com';
import { useState } from 'react';
 
const Hire = () => {
    const [alert, setAlert] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, e.target, process.env.NEXT_PUBLIC_USER)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setAlert("Thanks, i will contact you soon")
    }
    return (
        <div id="Hire">
        <div Style="display:flex;justify-content:center;padding-top:80px">
            <h1 >Contact me</h1>
        </div>
            <div className="container-form">
            
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="form-control" type="hidden" name="contact_number" required />
                    <label>Name</label>
                    <input className="form-control" type="text" name="from_name" required />
                    <label>Email</label>
                    <input className="form-control" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className="form-control" Style="padding-bottom:80px" name="message" required />
                    <input className="btn btn-primary" Style="margin-top:4.5px" type="submit" value="Send" />
                    <label>{alert}</label>
                </form>
            </div>
        </div>
    );

}

export default Hire;