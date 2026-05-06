'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IconChevronRight, IconChevronLeft, IconArrowRight } from '@tabler/icons-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cases, SLIDER_CASES_COUNT, SLIDER_SHOW_ALL_SLIDE } from '@/lib/cases';

export const CasesSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const visibleCases = cases.slice(0, SLIDER_CASES_COUNT);

  return (
    <section className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">Кейсы</h2>

          {/* Стрелки навигации */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Предыдущий кейс"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <IconChevronLeft size={18} stroke={1.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Следующий кейс"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <IconChevronRight size={18} stroke={1.5} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {/* Case slides */}
            {visibleCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="flex-none w-[85%] sm:w-[48%] lg:w-[calc((100%_-_2rem)_/_3)]"
              >
                <div className="p-6 border-2 border-gray-500 hover:border-primary rounded-[.75rem] flex flex-col h-full transition-colors duration-200">
                  {/* Image */}
                  <a href={caseItem.link} className="block mb-6 rounded-[.75rem] overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>

                  <p className="font-bold uppercase tracking-wider text-primary mb-3">
                    {caseItem.title}
                  </p>

                  <p className="text-gray-500 text-sm mb-4 flex-1">
                    {caseItem.description}
                  </p>

                  <div className="flex gap-3 mb-4">
                    {caseItem.techStack.map((IconComponent, idx) => (
                      <div key={idx} className="w-6 h-6 text-primary">
                        <IconComponent className="w-full h-full" />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.uniqueValues.map((value, idx) => (
                      <Badge key={idx} variant="outline">
                        {value}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={caseItem.link}
                    className="mt-auto inline-flex w-fit items-center gap-1 font-bold uppercase text-xs tracking-wider text-gray-500 transition-colors duration-300 hover:text-primary"
                  >
                    <span>Подробнее</span>
                    <IconArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}

            {/* "Смотреть все" slide — управляется флагом SLIDER_SHOW_ALL_SLIDE */}
            {SLIDER_SHOW_ALL_SLIDE && (
              <div className="flex-none w-[85%] sm:w-[48%] lg:w-[calc((100%_-_2rem)_/_3)]">
                <div className="p-6 border-2 border-dashed border-gray-300 hover:border-primary rounded-[.75rem] flex flex-col items-center justify-center h-full min-h-[400px] gap-3 transition-colors duration-200 group">
                  <p className="font-bold uppercase tracking-wider text-primary text-center">
                    Смотреть все кейсы
                  </p>
                  <p className="text-gray-500 text-sm text-center">
                    {cases.length - SLIDER_CASES_COUNT > 0
                      ? `Ещё ${cases.length - SLIDER_CASES_COUNT} проектов в нашем портфолио`
                      : 'Ещё больше проектов в нашем портфолио'}
                  </p>
                  <Button href="/cases" variant="primary" size="md">
                    Все кейсы <IconArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
