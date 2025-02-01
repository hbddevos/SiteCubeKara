import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const textArray = ['Alpine JS is Amazing'];
  const typeSpeed = 110;
  const cursorSpeed = 550;
  const pauseEnd = 1500;
  const pauseStart = 20;

  const cursorRef = useRef(null);

  useEffect(() => {
    const typingInterval = setInterval(startTyping, typeSpeed);

    return () => clearInterval(typingInterval); // Nettoyer l'intervalle
  }, [textIndex, charIndex, direction]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, cursorSpeed);

    return () => clearInterval(cursorInterval); // Nettoyer l'intervalle
  }, []);

  const startTyping = () => {
    const current = textArray[textIndex];

    if (charIndex > current.length) {
      setDirection('backward');
      setTimeout(() => {
        setDirection('forward');
        setCharIndex(current.length);
      }, pauseEnd);
      return;
    }

    setText(current.substring(0, charIndex));

    if (direction === 'forward') {
      setCharIndex((prev) => prev + 1);
    } else {
      if (charIndex === 0) {
        setDirection('forward');
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1 >= textArray.length ? 0 : prev + 1));
          setCharIndex(0);
        }, pauseStart);
      } else {
        setCharIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto text-center max-w-7xl">
      <div className="relative flex items-center justify-center h-auto">
        <p className="text-2xl font-black leading-tight">{text}</p>
        <span
          ref={cursorRef}
          className={`absolute right-0 w-2 -mr-2 bg-black h-3/4 ${
            isCursorVisible ? '' : 'hidden'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default TypingEffect;