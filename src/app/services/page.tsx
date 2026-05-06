import { IconArrowLeft } from '@tabler/icons-react';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги и цены — Разработка B2B порталов, интернет-магазинов, CRM, мобильных приложений',
  description: 'Разрабатываем B2B порталы, интернет-магазины, CRM с интеграцией 1С, мобильные приложения, Telegram-ботов и UX/UI дизайн. Прозрачные цены, фиксация стоимости в договоре.',
  openGraph: {
    title: 'Услуги и цены на разработку облачных платформ и приложений',
    description: 'B2B порталы, высоконагруженные интернет-магазины, CRM-системы, мобильные приложения, Telegram-боты, UX/UI дизайн. Индивидуальные решения под ваш бизнес.',
    images: ['/thumbnail.jpg'],
  },
};

export default function ServicesPage() {

  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      id: 'b2b-portals',
      title: 'B2B-порталы и личные кабинеты',
      description: 'Разработка корпоративных порталов с интеграцией в существующие системы',
      services: [
        {
          name: 'Простой личный кабинет',
          description: 'Авторизация, профиль, базовые функции',
          price: '150 000 - 300 000 ₽',
        },
        {
          name: 'B2B портал со средней сложностью',
          description: 'Каталог, корзина, заказы, интеграция с CRM, аналитика',
          price: '800 000 - 1 500 000 ₽',
        },
        {
          name: 'Высоконагруженный B2B портал',
          description: 'Масштабируемая архитектура, API, интеграции 1С/SAP, кастомные дашборды',
          price: '2 500 000 - 5 000 000 ₽',
        },
      ],
    },
    {
      id: 'ecommerce',
      title: 'Интернет-магазины',
      description: 'Разработка и интеграция e-commerce решений',
      services: [
        {
          name: 'Простой интернет-магазин',
          description: 'Каталог, корзина, оплата, доставка',
          price: '300 000 - 600 000 ₽',
        },
        {
          name: 'Магазин со средней сложностью',
          description: 'Каталог с фильтрами, система скидок, интеграция платежей, CRM',
          price: '800 000 - 1 500 000 ₽',
        },
        {
          name: 'Высоконагруженный магазин',
          description: 'Масштабируемая архитектура, множество платежных систем, интеграция с логистикой',
          price: '2 000 000 - 4 000 000 ₽',
        },
      ],
    },
    {
      id: 'crm-erp',
      title: 'CRM-системы / ERP-интеграции',
      description: 'Разработка и интеграция систем управления отношениями с клиентами',
      services: [
        {
          name: 'Кастомизация готового CRM',
          description: 'Настройка, интеграция с существующими системами',
          price: '200 000 - 500 000 ₽',
        },
        {
          name: 'CRM под ключ',
          description: 'Разработка с нуля, дашборды, интеграция с 1С, email-маркетинг',
          price: '800 000 - 1 500 000 ₽',
        },
        {
          name: 'ERP интеграция',
          description: 'Интеграция с SAP/1С, синхронизация данных, автоматизация процессов',
          price: '1 500 000 - 3 000 000 ₽',
        },
      ],
    },
    {
      id: 'mobile-apps',
      title: 'Мобильные приложения (iOS/Android)',
      description: 'Разработка нативных и кроссплатформенных мобильных приложений',
      services: [
        {
          name: 'Простое приложение',
          description: 'Одна платформа, базовая функциональность',
          price: '300 000 - 600 000 ₽',
        },
        {
          name: 'Приложение для обеих платформ',
          description: 'iOS и Android, средняя сложность, push-уведомления, аналитика',
          price: '800 000 - 1 500 000 ₽',
        },
        {
          name: 'Сложное приложение',
          description: 'Обе платформы, высокая нагрузка, офлайн-режим, интеграции',
          price: '1 500 000 - 3 000 000 ₽',
        },
      ],
    },
    {
      id: 'telegram-bots',
      title: 'Телеграм-боты и автоматизация',
      description: 'Разработка ботов и систем автоматизации',
      services: [
        {
          name: 'Простой Telegram-бот',
          description: 'Базовые команды, информационный функционал',
          price: '50 000 - 150 000 ₽',
        },
        {
          name: 'Бот со средней сложностью',
          description: 'Интеграция с БД, платежи, уведомления',
          price: '200 000 - 500 000 ₽',
        },
        {
          name: 'Система автоматизации',
          description: 'Комплексная автоматизация бизнес-процессов, интеграции',
          price: '500 000 - 1 500 000 ₽',
        },
      ],
    },
    {
      id: 'ux-ui-design',
      title: 'UX/UI дизайн для облачных платформ',
      description: 'Дизайн интерфейсов для веб и мобильных приложений',
      services: [
        {
          name: 'Дизайн простого приложения',
          description: 'Макеты, прототипы, гайдлайны',
          price: '100 000 - 250 000 ₽',
        },
        {
          name: 'Дизайн сложного приложения',
          description: 'Полный дизайн, user research, тестирование, итерации',
          price: '300 000 - 700 000 ₽',
        },
        {
          name: 'Дизайн системы',
          description: 'Design system, компоненты, документация, поддержка',
          price: '500 000 - 1 500 000 ₽',
        },
      ],
    },
  ];

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
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">Услуги и цены</h1>
            <p className="text-primary max-w-3xl">
              Мы разрабатываем: B2B-порталы, личные кабинеты, высоконагруженные интернет-магазины,
              CRM-системы с интеграцией 1С, мобильные приложения, Telegram-ботов,
              системы автоматизации, UX/UI дизайн для облачных платформ.
            </p>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, categoryIndex) => (

            <div key={categoryIndex} id={category.id} className="mb-16">
              <div className="mb-8">

                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {category.title}
                </h2>

                <p className="text-primary">{category.description}</p>

              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`card-gradient card-gradient-${categoryIndex % 6} p-6 border-2 border-gray-500 hover:border-primary rounded-[.75rem] flex flex-col justify-between h-full min-h-[132px] transition-all duration-300 hover:border-primary`}
                  >
                    <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                      {service.name}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4">
                      {service.description}
                    </p>

                    <div className="pt-6 border-t border-current border-gray-300">
                      <p className="font-bold text-lg">
                        {service.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          ))}

          <p className="text-xs text-gray-500">
            *Все цены указаны как диапазон. Итоговая стоимость фиксируется в договоре после утверждения ТЗ. Цены актуальны на {currentYear} год.
          </p>


        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
