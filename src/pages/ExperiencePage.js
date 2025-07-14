import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ExperiencePage = ({images, pageCard}) => {

    const experienceObj = [
        {
            company: "Oracle America, Inc.",
            from: "Jan 2025",
            to: "Present",
            title: "Senior Software Developer",
            location: "California, United States",
            logo: "Oracle.png",
            description: "Design and develop AI-driven EHR solutions to enhance healthcare efficiency." + 
                        "Build scalable and high-performance backend services using Java with microservices architecture and REST APIs." +
                        "Develop intuitive and responsive web applications using React and other JavaScript frameworks." +
                        "Deploy and manage cloud-based applications on Oracle Cloud, AWS, or Kubernetes." +
                        "Implement AI-powered features to optimize clinical decision-making and physician workflows." +
                        "Ensure compliance with healthcare industry standards and data security requirements." +
                        "Collaborate with cross-functional teams in an agile environment to deliver innovative healthcare solutions." +
                        "Provide mentorship and technical leadership to junior developers."
        },
        {
            company: "Yahoo Inc.",
            from: "Mar 2024", 
            to: "Jan 2025",
            title: "Senior Software Apps Engineer",
            location: "California, United States",
            logo: "yahoo.png",
            description: "Spearheaded development to deployment on projects, like creating AWS resources and Lambda functions, saving 20% in infrastructure setup time, eliminating manual effort by automating daily sync of AWS and GCP metadata into ServiceNow using CloudFormation templates and Java." +
                        "Led the project to build a crisis-related BIA portal in ServiceNow using Service Portal, from initial wireframe design to implementation and deployment, saving 60 hours quarterly by providing all necessary resources in a single platform." +
                        "Mentored and guided the team through the full project lifecycle, from requirements gathering to successful deployment, resulting in a 15% improvement in project delivery timelines and increased team performance." +
                        "Championed the adoption of agile methodologies across 4 teams, leading to a 30% increase in sprint velocity facilitated daily stand-ups and retrospectives to enhance collaboration and accountability." +
                        "Established a structured feedback loop with stakeholders during ServiceNow upgrade processes, which drove enhancements based on real-time user input this initiative resulted in a 40% reduction in post-launch support tickets." +
                        "Automated ServiceNow's HR notifications by integrating with the Google Translate API for Internationalization, increasing the system usage by 10%."
        },
        {
            company: "Yahoo Inc.",
            from: "Apr 2019",
            to: "Mar 2024",
            title: "Software Apps Engineer II",
            location: "California, United States",
            logo: "yahoo.png",
            description: "Led the end-to-end design, development to deploying on migrating from ServiceNow's old CMS to Service Portal by collaborating with cross-functional teams which increased user interaction with the ServiceNow platform by 25%." +
                        "Pioneered the initiative to research, analyze, and implement ServiceNow's Automated Test Framework (ATF), resulting in a 50% reduction in testing time during upgrades." +
                        "Constructed advanced modules within ServiceNow using Script Includes, Script Actions, Business Rules, Client Scripts drastically improved user efficiency for over 150 users, resulting in a 25% reduction in ticket resolution time across the organization." +
                        "Engineered bi-directional integrations using REST APIs and ServiceNow's Integration Hub spokes, connecting 10+ systems including Jira, Slack, and Google Calendar accelerated inter-system communication efficiency by 40% across teams." +
                        "Optimized and coded new features with a focus on efficiency, boosting software performance by 20%."
        },
        {
            company: "Yahoo Inc",
            from: "Feb 2017",
            to: "Apr 2019",
            title: "Software Apps Engineer I",
            location: "California, United States",
            logo: "yahoo.png",
            description: "Championed the design and implementation of the ground-up project such as Change Management System enabling users to create, track and monitor production releases leading to a 15% reduction in incidents." +
                        "Engineered a comprehensive suite of features like Bulk On-Call, resulting in improved user satisfaction scores these tools have become integral for over 100+ employees across the support and Incident Management teams." +
                        "Innovated and deployed features for Bulk Upload of hardware/mobile assets and nodes, which contributed to a 50% reduction in time spent by asset management and operations team on tracking, allowing teams to focus on strategic initiatives." +
                        "Made use of practical experience with Agile Development to streamline project workflow, resulting in timely delivery of all projects and also leading to a 20% improvement in performance."
        },
        {
            company: "Egen Solutions Inc.",
            from: "Aug 2015",
            to: "May 2016",
            title: "Software Developer Intern",
            location: "Arizona, United States",
            logo: "egeninc.png",
            description: "Designed, Developed and Implemented a new Angular based web application system by using Web technologies such as HTML5, SASS/CSS3, AngularJS, NodeJS, ExpressJS, GruntJS. The system automated student`s day to day activities within Blackboard, reducing manual tasks by 25% and increasing student engagement by 25%." +
                        "Implemented advanced JavaScript and AngularJS frameworks for form validation and other interactive features such as Localization (i10n) and Internalization (i18n) of the web application, enhancing usability for non-native English speakers." +
                        "Adopted an integrated testing framework combining Karma and Jasmine this initiative not only doubled the test coverage but also facilitated a 15% decrease in time on manual testing efforts." +
                        "Collaborated with cross-functional teams, translating intricate business requirements into functional specifications, ensuring seamless incorporation into system design prototypes and a 35% increase in successful solution implementations aligned with user needs."
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
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Professional Experience</h3>
                </div>

                <ol className="timeline-list">
                    {experienceObj.map((exp, index) => {
                        const descriptionList = exp.description.split('.').filter(item => item.trim() !== '');
                        return (
                            <li className="timeline-item" key={index}>
                                <div className="timeline-item-header">
                                    <div className="company-logo">
                                        <LazyLoadImage 
                                            src={images[exp.logo]} 
                                            alt={`${exp.company} logo`}
                                            effect="blur"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="h2 timeline-item-title">{exp.title}</h2>
                                        <h5 className="h5 timeline-item-title">{exp.company}
                                            <span className="vertical-separator"> | </span>
                                            {exp.location}
                                        </h5>
                                        <span>{exp.from} — {exp.to}</span>
                                    </div>
                                </div>
                                {descriptionList.length > 0 && (
                                    <span className="timeline-text">
                                        <ul>
                                            {descriptionList.map((item, idx) => (
                                                <li key={idx}>
                                                    {item.trim() + '.'}
                                                </li>
                                            ))}
                                        </ul>
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </section>
        </>
    );
}

export default ExperiencePage