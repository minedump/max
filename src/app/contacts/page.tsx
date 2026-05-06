import { IconArrowLeft, IconBrandTelegram, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Контакты | ${siteConfig.company.shortName}`,
  description: `Свяжитесь с нами по телефону ${siteConfig.contacts.phoneFormatted}, email ${siteConfig.contacts.email} или в Telegram ${siteConfig.contacts.telegramHandle}. Мы ответим на ваши вопросы.`,
  openGraph: {
    title: `Контакты | ${siteConfig.company.shortName}`,
    description: `Свяжитесь с нами любым удобным способом. Телефон: ${siteConfig.contacts.phoneFormatted}, Email: ${siteConfig.contacts.email}`,
    images: ['/thumbnail.jpg'],
  },
};

export default function ContactsPage() {
  const contactCards = [
    {
      icon: IconMapPin,
      title: 'Адрес',
      value: siteConfig.company.legalAddress,
    },
    {
      icon: IconPhone,
      title: 'Телефон',
      value: siteConfig.contacts.phoneFormatted,
    },
    {
      icon: IconMail,
      title: 'Email',
      value: siteConfig.contacts.email,
    },
    {
      icon: IconBrandTelegram,
      title: 'Telegram',
      value: siteConfig.contacts.telegramHandle,
      isClickable: true,
      href: siteConfig.contacts.telegramUrl,
    },
  ];

  return (
    <>
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="my-8">
            <a
              href="/"
              className="font-bold uppercase text-xs tracking-wider text-gray-500 hover:text-primary transition-colors flex items-center gap-1"
            >
              <IconArrowLeft size={12} />
              Вернуться на главную
            </a>
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">Контакты</h1>
            <p className="text-primary max-w-3xl">
              Свяжитесь с нами любым удобным способом - ответим в течение часа.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactCards.map((contact, index) => {
              const IconComponent = contact.icon;

              if (contact.isClickable) {
                return (
                  <div
                    key={index}
                    className="p-6 bg-white border-2 border-gray-500 hover:border-primary rounded-[.75rem] flex flex-col justify-between h-full transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <IconComponent size={28} strokeWidth={1.5} className="flex-shrink-0 text-gray-700" />
                      <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                        {contact.title}
                      </h3>
                    </div>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="p-6 bg-white border-2 border-gray-500 hover:border-primary rounded-[.75rem] flex flex-col justify-between h-full transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <IconComponent size={28} strokeWidth={1.5} className="flex-shrink-0 text-gray-700" />
                    <h3 className="font-bold uppercase tracking-wider text-primary mb-3">
                      {contact.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {contact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}