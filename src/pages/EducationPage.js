import React from 'react';

const EducationPage = ({pageCard}) => {

    const educationDetails = [
        {
            name: "Illinois Institute of Technology",
            degree: "Master of Science (M.S.)",
            major: "Computer Science",
            period: "Aug 2014 - Dec 2016",
            location: "Chicago, IL - USA"
        },
        {
            name: "Visvesvaraya Technological University",
            degree: "Bachelor of Engineering (B.E.)",
            major: "Computer Science",
            period: "Sep 2010 - Jul 2014",
            location: "Karnataka, India"
        }
    ];

    const certifications = [
        {
            name: "Developing on AWS",
            assoc: "Amazon Web Services (AWS)",
            period: "Jan 2024"
        },
        {
            name: "Fundamentals of AWS",
            assoc: "Amazon Web Services (AWS)",
            period: "Oct 2023"
        },
        {
            name: "Service Portal Advanced (Development)",
            assoc: "ServiceNow",
            period: "Oct 2019"
        },
        {
            name: "Server-side Development with NodeJS",
            assoc: "Coursera",
            period: "Feb 2017"
        },
        {
            name: "Crafting Quality Code",
            assoc: "Coursera",
            period: "May 2013"
        }
    ];

    return (
        <>
            <header>
                <h2 className="h2 article-title">{pageCard.pageTitle}</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="school-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    { 
                        educationDetails.map((school, index) => {
                            return (
                                <li className="timeline-item" key={index}>
                                    <h4 className="h4 timeline-item-title">{school.name} 
                                        <span className="vertical-separator"> | </span>
                                        {school.location}
                                    </h4>
                                    <span className='h5'>{school.degree} | {school.major}</span>
                                    <p className='h5'>{school.period}</p>
                                </li>
                            );
                        })
                    }
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Certifications</h3>
                </div>

                <ol className="timeline-list">
                    { 
                        certifications.map((cert, index) => {
                            return (
                                <li className="timeline-item" key={index}>
                                    <h4 className="h4 timeline-item-title">{cert.name}</h4>
                                    <span className='h5'>{cert.assoc}</span>
                                    <p className='h5'>{cert.period}</p>
                                </li>
                            );
                        })
                    }
                </ol>
            </section>
        </>
    );
}

export default EducationPage;