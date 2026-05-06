import { IconArrowLeft } from '@tabler/icons-react';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Реквизиты | ${siteConfig.company.shortName}`,
  description: `Юридическая информация, банковские реквизиты и контактные данные компании ${siteConfig.company.fullName}. ИНН ${siteConfig.company.inn}, КПП ${siteConfig.company.kpp}, ОГРН ${siteConfig.company.ogrn}, расчетный счет, телефон и email.`,
  openGraph: {
    title: `Реквизиты | ${siteConfig.company.shortName}`,
    description: `Юридическая информация, банковские реквизиты и контактные данные компании ${siteConfig.company.fullName}.`,
    images: ['/thumbnail.jpg'],
  },
};

export default function RequisitesPage() {
  const legalInfo = [
    { label: 'Полное наименование', value: siteConfig.company.fullName },
    { label: 'Юридический адрес', value: siteConfig.company.legalAddress },
    { label: 'ИНН/КПП', value: `${siteConfig.company.inn} / ${siteConfig.company.kpp}` },
    { label: 'ОГРН', value: siteConfig.company.ogrn },
    { label: 'Генеральный директор', value: siteConfig.company.generalDirector },
  ];

  const bankDetails = [
    { label: 'Название банка', value: siteConfig.bank.name },
    { label: 'БИК', value: siteConfig.bank.bik },
    { label: 'Расчётный счет', value: siteConfig.bank.checkingAccount },
    { label: 'Корреспондентский счет', value: siteConfig.bank.correspondentAccount },
  ];

  const contactInfo = [
    { label: 'Контактный телефон', value: siteConfig.contacts.phoneFormatted },
    { label: 'Электронная почта', value: siteConfig.contacts.email },
    { label: 'Почтовый адрес', value: siteConfig.company.postalAddress },
  ];

  return (
    <>
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Breadcrumb */}
          <div className="my-8">
            <a href="/" className="font-bold uppercase text-xs tracking-wider text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
              <IconArrowLeft size={12} />
              Вернуться на главную
            </a>
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">Реквизиты</h1>
          </div>

          {/* Legal Information */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Юридическая информация</h2>
            <div className="space-y-0 border-2 border-primary rounded-[.75rem] overflow-hidden">
              {legalInfo.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-6 ${
                    index < legalInfo.length - 1 ? 'border-b-2 border-primary' : ''
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="font-bold uppercase tracking-wider text-primary">
                    {item.label}
                  </div>
                  <p>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Банковские реквизиты</h2>
            <div className="space-y-0 border-2 border-primary rounded-[.75rem] overflow-hidden">
              {bankDetails.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-6 ${
                    index < bankDetails.length - 1 ? 'border-b-2 border-black' : ''
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="font-bold uppercase tracking-wider text-primary">
                    {item.label}
                  </div>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Контактная информация</h2>
            <div className="space-y-0 border-2 border-primary rounded-[.75rem] overflow-hidden">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-6 ${
                    index < contactInfo.length - 1 ? 'border-b-2 border-black' : ''
                  } hover:bg-gray-50 transition-colors`}
                >
                  <div className="font-bold uppercase tracking-wider text-primary">
                    {item.label}
                  </div>
                  <p>
                    {item.label === 'Электронная почта' ? (
                      <a href={`mailto:${siteConfig.contacts.email}`} className="hover:opacity-60 transition-opacity">
                        {item.value}
                      </a>
                    ) : item.label === 'Контактный телефон' ? (
                      <a href={`tel:${siteConfig.contacts.phoneRaw}`} className="hover:opacity-60 transition-opacity">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <ContactFormSection />
    </>
  );
}