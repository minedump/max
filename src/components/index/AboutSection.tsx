// /components/index/AboutSection.tsx
import React from 'react';
import { IconBolt, IconClock, IconUsers, IconRocket } from '@tabler/icons-react';
import { Badge } from '@/components/ui/Badge';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: '48 ЧАСОВ ПЕРВЫЙ ПРОТОТИП', icon: IconBolt },
    { label: '12 ЛЕТ НА РЫНКЕ', icon: IconClock },
    { label: '80+ ПРОЕКТОВ ЗАВЕРШЕНО', icon: IconRocket },
    { label: '30+ СПЕЦИАЛИСТОВ', icon: IconUsers },
  ];

  return (
    <section className="py-16">
      <div className="container">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">О нас</h1>
          <p className="text-primary max-w-3xl">
            Мы – команда профессионалов в области разработки и дизайна с более чем десятилетним опытом работы.
          </p>
          <p className="text-primary max-w-3xl">
            Работаем над проектами различного масштаба: как для корпораций, так и предприятия малого бизнеса.
          </p>
          <p className="text-primary max-w-3xl">
            Мы обеспечиваем полный цикл разработки и дизайна проектов, что позволяет нашим клиентам сократить время и затраты.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Badge
                key={index}
                variant="secondary"
              >
                <IconComponent size={18} strokeWidth={1.5} />
                <span>{stat.label}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};