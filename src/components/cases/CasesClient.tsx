"use client";

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ContactFormSection } from '@/components/ContactFormSection';
import { IconArrowLeft } from '@tabler/icons-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { cases } from '@/lib/cases';

export default function CasesClient() {

  const { scrollToSection } = useSmoothScroll(64);

  return (
    <>
      <section className="pt-16 pb-16">
        <div className="container">

          {/* Breadcrumb */}
          <div className="my-8">
            <a href="/" className="font-bold uppercase text-xs tracking-wider text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
              <IconArrowLeft size={12} />
              Вернуться на главную
            </a>
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">Кейсы</h1>
            <p className="text-primary max-w-3xl">
              Портфолио наших успешных проектов, демонстрирующих нашу экспертизу в разработке сложных цифровых решений.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-3 mb-20">
            {cases.map((caseItem) => (
              <Button
                key={caseItem.id}
                variant="outline"
                size="sm"
                onClick={() => scrollToSection(caseItem.id)}
                className="font-bold uppercase tracking-wider text-xs font-mono"
              >
                {caseItem.title}
              </Button>
            ))}
          </div>

          {/* Cases */}
          <div className="space-y-16">
            {cases.map((caseItem) => (
              <section key={caseItem.id} id={caseItem.id}>

                {/* Case Header */}
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {caseItem.title}
                  </h2>
                  <p className="text-primary">{caseItem.subtitle}</p>
                </div>

                {/* Full Description */}
                <div className="max-w-3xl mb-12">
                  <p className="text-primary">{caseItem.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-12">
                  <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                    Технологический стек
                  </h3>
                  <div className="flex gap-4">
                    {caseItem.techStack.map((IconComponent, idx) => (
                      <div key={idx} className="w-10 h-10 text-black hover:text-gray-600 transition-colors">
                        <IconComponent className="w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unique Values */}
                <div className="mb-12">
                  <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                    Уникальные ценности
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseItem.uniqueValues.map((value, idx) => (
                      <Badge key={idx} variant="outline">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                    Функционал
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseItem.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm font-mono text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                    Скриншоты
                  </h3>
                  <div className="space-y-4">
                    {caseItem.images.map((image, index) => (
                      <div key={index} className="rounded-[.75rem] overflow-hidden">
                        <img
                          src={image}
                          alt={`${caseItem.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </section>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
