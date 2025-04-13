import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const importAll = (assets) => {
  let images = {};
  assets.keys().forEach((item) => {
      images[item.replace('./', '')] = assets(item);
  });
  return images;
};

const images = importAll(require.context('../assets/images/skills', false, /\.(png|jpe?g|svg)$/));

const SkillsPage = ({pageCard}) => {

  const categories = {
      "Web Technologies": [
        { name: "HTML", icon: "html5.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "SASS", icon: "sass.svg" },
        { name: "LESS", icon: "less.svg" },
        { name: "Javascript", icon: "javascript.png" },
        { name: "Angular", icon: "angular.svg" },
        { name: "ReactJS", icon: "reactjs.png" },
        { name: "jQuery", icon: "jquery.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Bootstrap", icon: "bootstrap.svg" },
        { name: "NodeJS", icon: "nodejs.svg" },
        { name: "ExpressJS", icon: "expressjs.png" }
      ],
      "Backend Programming Languages": [
        { name: "C", icon: "c.png" },
        { name: "C++", icon: "cpp.png" },
        { name: "Java", icon: "java.png" },
      ],
      "Cloud Technologies": [
        { name: "Amazon Web Services", icon: "aws.png" },
        { name: "Google Cloud", icon: "gcp.png" }
      ],
      "Database": [
        { name: "MySQL", icon: "mysql.svg"},
        { name: "MongoDB", icon: "mongodb.svg"}
      ],
      "Version Control, Build & Log Tools": [
        { name: "Git", icon: "git.png"},
        { name: "Grunt JS", icon: "grunt.svg"},
        { name: "Jenkins", icon: "jenkins.png"},
        { name: "Maven", icon: "maven.svg"},
        { name: "Gradle", icon: "gradle.svg"},
        { name: "Screwdriver (CI/CD)", icon: "screwdriver.png"},
        { name: "Docker", icon: "docker.png"},
        { name: "jFrog Artifactory", icon: "jfrog.png"}
      ],
      "Development/Software Tools": [
        { name: "ServiceNow", icon: "servicenow.png"},
        { name: "Postman", icon: "postman.svg"},
        { name: "Jira", icon: "jira.svg"},
        { name: "Confluence", icon: "confluence.svg"},
        { name: "IntelliJ IDEA", icon: "intellij-idea.png"},
        { name: "Visual Studio Code", icon: "visual-studio-code.png"},
        { name: "MS Project", icon: "msproject.png"},
        { name: "MS Visio", icon: "msvisio.png"},
        { name: "MS Office 365", icon: "ms365.svg"},
        { name: "Slack", icon: "slack.png"}
      ]
    };
  
    return (
      <>
        <header>
          <h2 className="h2 article-title">{pageCard.pageTitle}</h2>
        </header>

        <section className="timeline">
          <div className="icon-skill-categories">
            {Object.entries(categories).map(([category, skills]) => (
              <div key={category} className="skills-container">
                <div className="category">
                  <h3 className="h3 skills-title">{category}</h3>
                  <div className="skills">
                      {skills.map((skill, index) => (
                        <div key={`${skill.name}-${index}`} className="skill" style={{ "--delay": index }}>
                            <LazyLoadImage
                              src={images[skill.icon]} 
                              alt={skill.name}
                              effect="blur"
                            />
                            <span>{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

export default SkillsPage;