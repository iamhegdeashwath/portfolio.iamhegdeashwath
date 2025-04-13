import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import ContactDetails from './ContactDetails';
import SocialProfiles from './SocialProfiles';
import resume from '../assets/Resume (Mar 2025).pdf';
//import { title } from 'framer-motion/client';

const contacts = [
    {
      iconName: "mail-outline",
      title: "Email",
      link: "mailto:hegde.ashwath1@gmail.com",
      contact: "hegde.ashwath1@gmail.com",
    },
    {
      iconName: "phone-portrait-outline",
      title: "Phone",
      link: "tel:+12133522795",
      contact: "+1 (669) 224 - 0723",
    },
    {
      iconName: "calendar-outline",
      title: "Birthday",
      link: "Sep 02, 1992",
      contact: "1992-09-02",
      isTime: true,
    },
    {
      iconName: "location-outline",
      title: "Location",
      contact: "Milpitas - CA, USA",
      isAddress: true,
    },
];
  
const socialLinks = [
    { iconName: "logo-linkedin", href: "https://linkedin.com/in/hegde0209", color: "#007BB6", imageTitle: "Linkedin" },
    { iconName: "logo-github", href: "https://github.com/iamhegdeashwath", color: "#FFFFFF", imageTitle: "Github" },
    { iconName: "logo-twitter", href: "https://x.com/HegdeAshwath", color: "#1DA1F2", imageTitle: "X (Formerly Twitter)" },
    { iconName: "logo-instagram", href: "https://instagram.com/hegde92", color: "#E4405F", imageTitle: "Instagram" },
    { iconName: "logo-facebook", href: "https://facebook.com/ashwath1992", color: "#1877F2", imageTitle: "Facebook" },
    { iconName: "logo-youtube", href: "https://www.youtube.com/@AshwathHegde", color: "#CD201F", imageTitle: "YouTube" },
];

const Aside = ({images}) => {

    const [collapseContacts, setCollapseContacts] = useState(false);
    const avatar = images['PHL03254.jpeg'];

    const showContacts = () => {
        setCollapseContacts(!collapseContacts);
    }

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Ashwath Suresh Hegde - Resume.pdf";
        link.click();
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'CV Downloaded from Sidebar section',
        });
    };

    return (
        <aside className={`sidebar ${collapseContacts ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={avatar} alt="Ashwath Suresh Hegde" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="first-name name" title="Ashwath">
                    Ashwath
                    </h1>
                    <h2 className="last-name name" title="Suresh Hegde">
                    Suresh Hegde
                    </h2>
                    <p className="title">Senior Software Developer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn onClick={showContacts}>
                    <span>Show Contacts</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>
    
            <div className="sidebar-info_more">
                <div className="separator"></div>
        
                <ul className="contacts-list">
                    {contacts.map((contactItem, index) => (
                        <ContactDetails
                            key={index}
                            iconName={contactItem.iconName}
                            title={contactItem.title}
                            link={contactItem.link}
                            contact={contactItem.contact}
                            isTime={contactItem.isTime}
                            isAddress={contactItem.isAddress}
                        />
                    ))}
                </ul>

                <div>
                    <button
                        onClick={downloadCV}
                        className="download-cv-btn download-cv-btn-lg">
                            <ion-icon name="cloud-download-outline"></ion-icon>
                            <span>Download CV</span>
                    </button>
                </div>
        
                <div className="separator"></div>
        
                <ul className="social-list">
                    {socialLinks.map((socialItem, index, color) => (
                        <SocialProfiles key={index} socialObj={socialItem}/>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Aside;