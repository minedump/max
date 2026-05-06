// components/TypewriterTitle.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTitleProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onTypingComplete?: () => void;
}

export const TypewriterTitle: React.FC<TypewriterTitleProps> = ({
  text,
  speed = 100,
  delay = 500,
  className = '',
  onTypingComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // Используем ref для отслеживания, был ли уже запущен эффект
  const hasStartedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTyping = () => {
      let index = 0;
      
      intervalRef.current = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsTyping(false);
          onTypingComplete?.();
        }
      }, speed);
    };

    timeoutRef.current = setTimeout(startTyping, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

  }, [text, speed, delay, onTypingComplete]);


  useEffect(() => {
    if (!isTyping) {
      setShowCursor(false);
      return;
    }
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return (
    <div className={`text-6xl lg:text-[6rem] font-bold text-primary pb-[2rem] pt-[2rem] leading-[0.85] ${className}`}>
      {displayedText}
      {isTyping && (
        <span className={`inline-block w-[4px] h-[0.7em] bg-white ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      )}
    </div>
  );
};