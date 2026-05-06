'use client';

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { getTechIcon } from '@/components/ui/TechIcons';
import { cn } from '@/lib/utils';

export const StackSection: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const techStack = [
    {
      category: 'AI-агенты',
      items: ['Claude', 'Cursor', 'Manus', 'Recraft'],
    },
    {
      category: 'Языки',
      items: ['Python', 'Node.js', 'Golang', 'PHP', 'Ruby', 'JavaScript'],
    },
    {
      category: 'Базы данных',
      items: ['PostgreSQL', 'Redis', 'MongoDB'],
    },
    {
      category: 'Инфраструктура',
      items: ['Docker', 'Kubernetes', 'Kafka', 'RabbitMQ', 'Grafana', 'CI/CD'],
    },
  ];

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(Number(e.target.value));
  };

  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };

  return (
    <section className="pb-32">
      <div className="container">

        {/* Desktop: Tabs */}
        <div className="hidden md:flex gap-4 mb-8 ">
          {techStack.map((stack, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-4 text-xs h-[50px] font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center relative ${
                activeTab === index
                  ? 'text-gray-500 border-b-[2px] border-gray-500 hover:border-primary hover:text-primary'
                  : 'text-gray-500 border-b-[2px] border-transparent hover:text-primary'
              }`}
            >
              {stack.category}
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown Select */}
        <div className="md:hidden mb-8 relative">
          <select
            value={activeTab}
            onChange={handleSelectChange}
            onClick={handleSelectClick}
            onBlur={handleSelectBlur}
            className={cn(
              'w-full text-base px-4 py-3 rounded-[.75rem] border border-gray-300 bg-gray-100 text-primary placeholder-gray-500',
              'focus:outline-none focus:border-black',
              'h-[50px] appearance-none cursor-pointer',
            )}
          >
            {techStack.map((stack, index) => (
              <option key={index} value={index}>
                {stack.category}
              </option>
            ))}
          </select>
          

          {isSelectOpen ? (
            <IconChevronUp 
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-all duration-200"
              size={20}
              stroke={1.5}
            />
          ) : (
            <IconChevronDown 
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-all duration-200"
              size={20}
              stroke={1.5}
            />
          )}

        </div>

        {techStack.map((stack, tabIndex) => (
          <div
            key={tabIndex}
            className={`${activeTab === tabIndex ? 'block' : 'hidden'} animate-in fade-in duration-300`}
          >
            <div className="flex gap-8 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {stack.items.map((item, itemIndex) => {
                const IconComponent = getTechIcon(item);
                return (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-2 group flex-shrink-0"
                  >
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <span className="text-2xl text-primary">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}


      </div>
    </section>
  );
};