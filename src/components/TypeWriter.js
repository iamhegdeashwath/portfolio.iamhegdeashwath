
import React, { useState, useEffect } from "react";

const Typewriter = () => {

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 200;
  const pauseDuration = 1500;
  
  useEffect(() => {
    const texts = [
      "a Senior Software Developer",
      "a Frontend Web Developer",
      "a Full-Stack Developer",
      "your next best hire!",
    ];
    let typingTimeout;

    const type = () => {
      const fullText = texts[currentIndex];

      if (!isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };
    typingTimeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, currentIndex, typingSpeed]);
  
  return (
    <div className="typewriter">
        <span className="typewriter-block">HELLO</span>
        <span>
          I AM
          <span className="typewriter-text">&nbsp;{currentText}</span>
          <span className="typewriter-dash">_</span>
        </span>
    </div>
  );
  
};

export default Typewriter;