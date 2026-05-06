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
    <section className="relative overflow-hidden">
      {/* Видео фон */}
<div className="absolute inset-0 w-full h-full overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover hero-video"
    autoPlay
    loop
    muted
    playsInline
    poster="/images/hero-bg.webp"
  >
    <source src="/videos/hero3.mp4" />
  </video>
</div>

      {/* Контент */}
      <div className="relative container z-10">
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
              <Badge variant="outline" className="bg-black/20 backdrop-blur-sm text-white border-white">
                <IconShieldCheckFilled size={18} />
                Аккредитованная IT-компания
              </Badge>
              
            </div>

            <TypewriterTitle 
              text="Удаленная команда для вашего проекта"
              speed={90}
              delay={300}
              onTypingComplete={handleTypingComplete}
              className="text-white"
            />

            <div 
              className={`transition-all duration-700 ease-out ${
                isTypingComplete 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="md:text-2xl text-xl text-white pb-[2rem]">
                Проектирование, разработка и поддержка проектов любой сложности
              </p>

              <Button
                variant="red"
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