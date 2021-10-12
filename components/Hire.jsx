import emailjs from 'emailjs-com';

const Hire = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_DylanGonzalezASD', 'template_contact', e.target, 'user_bpxo0jKYCyl7B3ARsI42A')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
        <div Style="display:flex;justify-content:center;padding-top:80px">
            <h1 >Contact me</h1>
        </div>
            <div className="container-form">
            
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="form-control" type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input className="form-control" type="text" name="from_name" />
                    <label>Email</label>
                    <input className="form-control" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className="form-control" Style="padding-bottom:80px" name="message" />
                    <input className="btn btn-primary" Style="margin-top:4.5px" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );

}

export default Hire;