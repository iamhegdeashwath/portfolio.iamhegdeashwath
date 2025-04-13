import React from 'react';

const SocialProfiles = ({socialObj}) => {

  return (
    <li className="social-item">
        <a href={socialObj.href} className="social-link" 
          target="_blank" rel="noopener noreferrer" 
          onMouseEnter={(e) => {
            if(socialObj.iconName !== "logo-twitter")
              e.target.style.color = socialObj.color;
          }}
          onMouseLeave={(e) => {
            if(socialObj.iconName !== "logo-twitter")
              e.target.style.color = "#d6d6d6b3";
          }}
        >
        {
          socialObj.iconName !== "logo-twitter" && <span title={socialObj.imageTitle}>
            <ion-icon name={socialObj.iconName}></ion-icon>
          </span>
        }
        {
          socialObj.iconName === "logo-twitter" && <span class="ion--logo-x" title={socialObj.imageTitle}></span>
        }
        </a>
    </li>
  )
  
}

export default SocialProfiles