import IndexClient from '@/components/index/IndexClient';

import { HeroSection } from '@/components/index/HeroSection';
import { CasesSection } from '@/components/index/CasesSection';
import { StackSection } from '@/components/index/StackSection';
import { ExpertiseSection } from '@/components/index/ExpertiseSection';
import { AboutSection } from '@/components/index/AboutSection';
import { Metadata } from 'next';

import { ContactFormSection } from '@/components/ContactFormSection';

export const metadata: Metadata = {
  title: 'Макстехнолоджи | Разработка и поддержка IT-проектов',
  description:
    'Аккредитованная IT-компания. Проектируем B2B-порталы, интернет-магазины, CRM-системы, мобильные приложения и Telegram-ботов. Опыт более 12 лет, более 80 проектов.',
  openGraph: {
    title: 'Макстехнолоджи — студия разработки полного цикла',
    description:
      'Разрабатываем отказоустойчивые цифровые системы: B2B, CRM, e-commerce, мобильные приложения и AI-агентов.',
    images: ['/thumbnail.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <IndexClient>
        <HeroSection />
        <CasesSection />
        <AboutSection />
        <ExpertiseSection />
        <StackSection />
        <ContactFormSection />
      </IndexClient>
    </>
  );
}