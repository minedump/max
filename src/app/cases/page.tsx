import { Metadata } from 'next';
import CasesClient from '@/components/cases/CasesClient';

export const metadata: Metadata = {
  title: 'Кейсы | Наши проекты и успешные реализации',
  description: 'Портфолио наших успешных проектов: Omni Pay, ByHelp CRM, Иммунотека. Разработка сложных цифровых решений для бизнеса любого масштаба.',
  openGraph: {
    title: 'Кейсы | Портфолио проектов по разработке цифровых решений',
    description: 'Посмотрите наши успешные проекты: облачные платформы, CRM-системы, медицинские порталы. Реализованные решения для автоматизации бизнеса.',
    images: ['/thumbnail.jpg'],
  }
};

export default function CasesPage() {
  return <CasesClient />;
}