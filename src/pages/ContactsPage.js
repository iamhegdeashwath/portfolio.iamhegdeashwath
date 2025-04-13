import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

const ContactsPage = ({pageCard}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        return () => {
            setIsLoading(true);
        };
    }, []);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const setFormField = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formDataWithHiddenFields = {
        ...formData,
        _captcha: "false"
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formsubmit.co/hegde.ashwath1@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataWithHiddenFields),
            });

            if (response.ok) {
                setSuccessMessage("Your message has been sent successfully!");
                setErrorMessage("");
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            } else {
                throw new Error("Something went wrong. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.message);
            setSuccessMessage("");
        }
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'Send Message via Contact Page',
        });
    };

    return (
        <>
            <header>
                <h2 className="h2 article-title">{pageCard.pageTitle}</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    {isLoading && (
                        <div className="spinner-container">
                        <div className="spinner"></div>
                        </div>
                    )}
                    <iframe
                        width="600"
                        height="450"
                        style={{border:'0'}}
                        title="Milpitas, California Area"
                        loading="lazy"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAqRj_nUu61uhSvia4D5_IaN5yTduwCD5g&q=Milpitas,CA"
                        onLoad={handleIframeLoad} >
                    </iframe>
                </figure>
                </section>
                <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={sendMessage} className="form" data-form>
                    <input type="hidden" name="_captcha" value="false" className="form-input"/>
                    <div className="input-wrapper">
                        <input type="text" name="name" value={formData.name} className="form-input" placeholder="Full name" onChange={setFormField} required data-form-input />
                        <input type="email" name="email" value={formData.email} className="form-input" placeholder="Email address" onChange={setFormField} required data-form-input />
                    </div>
                    
                    <textarea name="message" className="form-input" value={formData.message} placeholder="Your Message" onChange={setFormField} required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled={isSubmitting} data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                </form>
                {
                    successMessage && <div className="alert alert-success-msg alert-dismissible fade show">
                        {successMessage}
                        <button type="button" className="btn-close" 
                            data-bs-dismiss="alert" aria-label="Close"
                            onClick={() => setSuccessMessage("")}></button>
                    </div>
                }
                {
                    errorMessage && <div className="alert alert-error-msg alert-dismissible fade show">
                        {errorMessage}
                        <button type="button" className="btn-close" 
                            data-bs-dismiss="alert" aria-label="Close"
                            onClick={() => setErrorMessage("")}></button>
                    </div>
                }
            </section>
        </>
    );
}

export default ContactsPage