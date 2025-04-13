import React from 'react'

const ContactDetails = ({ iconName, title, link, contact, isTime, isAddress }) => {

  return (
    <li className="contact-item">
      <div className="icon-box">
        <ion-icon name={iconName}></ion-icon>
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {isTime ? (
          <time dateTime={contact}>{link}</time>
          ) : isAddress ? (
          <address>{contact}</address>
        ) : (
          <a href={link} className="contact-link">
            {contact}
          </a>
        )}
      </div>
    </li>
  )

}

export default ContactDetails