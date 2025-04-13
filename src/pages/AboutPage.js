import React, { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactGA from 'react-ga4';
import Modal from '../components/Modal';
import Typewriter from '../components/TypeWriter';
import resume from '../assets/Resume (Mar 2025).pdf';

const AboutPage = ({images, pageCard}) => {
    const { setActiveMenu } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recommendation, setRecommendation] = useState({});
    const navigate = useNavigate();

    const services = [
        {
            title: "Frontend Web Developer",
            text: "Building high-quality responsive websites frontend using HTML, CSS, JavaScript and frameworks like Angular, ReactJS and etc...",
            icon: "icon-dev.svg"
        },
        {
            title: "Custom Servicenow Solutions",
            text: "Professional servicenow architect with experience in different areas of servicenow.",
            icon: "manage-cloud.svg"
        },
        {
            title: "UI/UX Design",
            text: "Designing highly attractive user interface for mobile and web applications.",
            icon: "icon-design.svg"
        },
        {
            title: "Photography",
            text: "Enthusiast and passionaite photographer who likes to capture the moments as a hobby.",
            icon: "icon-photo.svg"
        },
    ]

    const recommendations = [
        {
            name: "Kristin Dolliff",
            title: "Senior Director, IT Engineering & Development at Yahoo",
            timePeriod: "August 16th, 2024",
            timeStamp: "2024-08-16",
            relation: "Kristin Managed Ashwath directly",
            comments: "Ashwath has become a seasoned engineer here at Yahoo. His promotion to Senior Software Engineer was well deserved. He is able to learn quickly, explain complex concepts in executive speak, and produce automation that exceeds expectations. He is driven and self-motivated. In addition to his skill set as an engineer he is an excellent team mate, supportive, reliable and encouraging. I highly recommend Ashwath.",
            image: "avatar-kristin.png"
        },
        {
            name: "Aman Gulati",
            title: "Principal Software Engineer at Yahoo",
            timePeriod: "November 16th, 2024",
            timeStamp: "2024-11-16",
            relation: "Aman worked with Ashwath on the same team",
            comments: "I had the privilege of working with Ashwath for over seven years at Yahoo, and I can say that his knowledge on the ServiceNow platform, frontend and UI frameworks is exceptional. He has a great understanding of frontend and backend architecture. He was able to develop efficient solutions for complex business problems using his vast knowledge. Beyond their technical expertise, he is great in collaborating within and outside the team. I would highly recommend him as a valuable asset to any team.",
            image: "avatar-aman.png"
        },
        {
            name: "Dan Mank",
            title: "Senior Manager at Yahoo",
            timePeriod: "August 16th, 2024",
            timeStamp: "2024-08-16",
            relation: "Dan worked with Ashwath but on different team",
            comments: "Ashwath has been instrumental in enhancing & maintaining the BC/DR, Change Management & Business Impact Assessment modules within ServiceNow. He has implemented ease of use strategies and user friendly workflows that enabled adoption among the Yahoo Business Units. Lastly, he was successful with enhancing the ServiceNow CMDB relationships and dependencies to enable the combination of baremetal and public cloud assets (CIs) to coexist within a parent to child/children relationships.",
            image: "avatar-dmank.png"
        },
    ]

    const showDialog = (user) => {
        setRecommendation(user);
        setIsModalOpen(!isModalOpen);
    };
    
    const hideDialog = () => {
        setIsModalOpen(false);
    };

    const goToContactPage = () => {
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'Clicked Hire Me',
        });
        setActiveMenu("Contact");
        navigate("/contact");
    };

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Ashwath Suresh Hegde - Resume.pdf";
        link.click();
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'CV Downloaded from About section',
        });
    };

    return (
        <>
            <header>
                <h2 className="h2 article-title">{pageCard.pageTitle}</h2>
            </header>

            <section className="about-section">

                <div className="custom-container">
                    <div className="custom-container-column left">
                        <Typewriter></Typewriter>
                        <div className="about-btns">
                            <button onClick={goToContactPage} className="hire-me-btn">
                                <ion-icon name="bookmarks-outline"></ion-icon>
                                <span>Hire Me</span>
                            </button>
                            <button
                                onClick={downloadCV}
                                className="download-cv-btn-secondary download-cv-btn-sm">
                                    <ion-icon name="cloud-download-outline"></ion-icon>
                                    <span>Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div className="custom-container-column right">
                        <LazyLoadImage 
                            src={images['portfolio-user.png']} 
                            alt="Your next best hire"
                            effect="blur"
                        />
                    </div>
                </div>

            </section>

            <section className="about-text">
                <p>
                    I'm a Tech enthusiast from California, United States, working in fullstack/frontend web development.
                    I enjoy turning complex problems into simple, beautiful and intuitive solutions.
                </p>
                <p>
                    Senior Software Developer with 8 years of experience building web applications and ServiceNow solutions. 
                    Proficient in full-stack development, including AngularJS 1.x to Angular v18, ReactJS, NodeJS, and ServiceNow Core and Service Portal modules. 
                    Focused on creating efficient user interfaces and integrating REST/SOAP web services. 
                    Experienced in leading and managing complex projects with strong communication and a focus on data-driven decision-making.
                </p>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                    {services.map((service) => {
                        return (
                            <li key={service.title} className="service-item">
                                <div className="service-icon-box">
                                    <LazyLoadImage 
                                        src={images[service.icon]} 
                                        alt={`${service.icon} icon`} 
                                        width="40"
                                        effect="blur"
                                    />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">{service.title}</h4>
                                    <p className="service-item-text">
                                        {service.text}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="testimonials">
                <h3 className="h3 testimonials-title">Recommendations</h3>
                <ul className="testimonials-list has-scrollbar">
                    {recommendations.map((recomends) => {
                        return (
                            <li className="testimonials-item" key={recomends.name}>
                                <div className="content-card" data-testimonials-item onClick={() => showDialog(recomends)}>
                                    <figure className="testimonials-avatar-box">
                                        <LazyLoadImage 
                                            src={images[recomends.image]} 
                                            alt={recomends.name} 
                                            width="60" data-testimonials-avatar 
                                            effect="blur"
                                        />
                                    </figure>
                                    <span className="testimonials-title-block">
                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>{recomends.name}</h4>
                                        <h5 className="testimonials-item-sub-title" data-testimonials-sub-title>{recomends.title}</h5>
                                    </span>
                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>{recomends.comments}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <Modal images={images} user={recommendation} isOpen={isModalOpen} onClose={hideDialog}>
                <p>{recommendation.comments}</p>
            </Modal>
        </>
    );
}

export default AboutPage