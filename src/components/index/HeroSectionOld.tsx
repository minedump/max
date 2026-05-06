'use client';

import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { IconShieldCheckFilled } from '@tabler/icons-react';
import { TypewriterTitle } from '@/components/TypewriterTitle';
import { useState } from 'react';

export const HeroSection: React.FC = () => {
  const { scrollToSection } = useSmoothScroll(64);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleContactClick = () => {
    scrollToSection('contacts');
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <section className="animated-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-[4rem] h-screen">
          <div>
            
          <div 
            className={`transition-all duration-500 ease-out ${
              isTypingComplete 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Badge variant="outline">
              <IconShieldCheckFilled size={18} />
              Аккредитованная IT-компания
            </Badge>
          </div>

            <TypewriterTitle 
              text="Удаленная команда для вашего проекта"
              speed={90}
              delay={300}
              onTypingComplete={handleTypingComplete}
            />

            <div 
              className={`transition-all duration-700 ease-out ${
                isTypingComplete 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="md:text-2xl text-xl text-lg text-primary pb-[2rem]">
                Проектирование, разработка и поддержка проектов любой сложности
              </p>

              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                type="button"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};