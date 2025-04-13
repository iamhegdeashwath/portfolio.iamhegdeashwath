import React from 'react';

const Modal = ({ images, user, isOpen, onClose, children }) => {

    return (
        <div className={`modal-container ${isOpen ? 'active' : ''}`} data-modal-container>
            <div
                className={`overlay ${isOpen ? 'active' : ''}`}
                data-overlay
                onClick={onClose}></div>
    
            <section className={`testimonials-modal ${isOpen ? 'active' : ''}`}>
                <button
                    className="modal-close-btn"
                    data-modal-close-btn
                    onClick={onClose}
                >
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                    <img
                        src={images[user.image]}
                        alt="Daniel lewis"
                        width="80"
                        data-modal-img
                    />
                    </figure>
                    <img src={images['icon-quote.svg']} alt="quote icon" />
                </div>
    
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h4 className="h3 modal-title" data-modal-title>
                        {user.name}
                    </h4>
                    <h5 className="h5 modal-subtitle" data-modal-subtitle>
                        {user.title}
                    </h5>
                    <span>
                        <time dateTime={user.timeStamp}>{user.timePeriod}</time>, {user.relation}
                    </span>
                    <div data-modal-text>{children}</div>
                </div>
            </section>
        </div>
    );
};

export default Modal;