import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';

export const ExpertiseSection: React.FC = () => {
  const expertise = [
    { title: 'B2B-порталы и личные кабинеты', anchor: 'b2b-portals' },
    { title: 'Интернет-магазины', anchor: 'ecommerce' },
    { title: 'CRM-системы / ERP-интеграции', anchor: 'crm-erp' },
    { title: 'Мобильные приложения (iOS/Android)', anchor: 'mobile-apps' },
    { title: 'Телеграм-боты и автоматизация', anchor: 'telegram-bots' },
    { title: 'UX/UI дизайн для облачных платформ', anchor: 'ux-ui-design' },
  ];

  return (
    <section className="pt-16 pb-8">
      <div className="container">


        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-4">
            Ключевая экспертиза
          </h2>

          <h3 className="text-2xl lg:text-3xl font-bold text-primary">
            Мы проектируем цифровые системы, в которых важны:
          </h3>
        </div>



        <div className="mb-10">
          <div className="animated-bg-small md:p-8 p-4 rounded-[.75rem] md:rounded-[1.5rem] w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-primary list-disc pl-5 max-w-3xl">
              <li>
                <strong>Надежность</strong> — отказоустойчивая архитектура и предсказуемость работы.
              </li>
              <li>
                <strong>Скорость развития продукта</strong> — итеративная поставка ценности без накопления техдолга.
              </li>
              <li>
                <strong>Интеграционная готовность</strong> — системы спроектированы для связи с внешними сервисами.
              </li>
              <li>
                <strong>Контроль над эксплуатацией</strong> — полная наблюдаемость и управляемость на каждом этапе.
              </li>
              <li>
                <strong>Инженерная автоматизация на базе AI-агентов</strong> — ускорение разработки и рефакторинга.
              </li>
              <li>
                <strong>DevOps и Infrastructure as Code</strong> — автоматизированное развертывание и масштабирование.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((item, index) => (
            <a
              key={index}
              href={`/services#${item.anchor}`}
              className={`card-gradient card-gradient-${index % 6} p-6 bg-white border-2 border-gray-500 hover:border-primary rounded-[.75rem] flex flex-col justify-between h-full min-h-[132px] transition-all duration-300 hover:border-primary`}
            >
              <p className="font-bold uppercase tracking-wider text-primary">
                {item.title}
              </p>

              <div className="details-container mt-4 inline-flex items-center gap-1">
                <span className="font-bold uppercase text-xs tracking-wider text-gray-500 transition-colors duration-300">
                  Подробнее
                </span>
                <IconArrowRight size={12} className="text-gray-500 transition-colors duration-300" />
              </div>

            </a>
          ))}
        </div>


      </div>
    </section>
  );
};