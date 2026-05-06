import { IconArrowLeft } from '@tabler/icons-react';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Согласие на обработку персональных данных | ${siteConfig.company.shortName}`,
  description: `Согласие на обработку персональных данных пользователей сервисов ${siteConfig.company.fullName}. Условия, цели и сроки обработки персональной информации.`,
  openGraph: {
    title: `Согласие на обработку персональных данных | ${siteConfig.company.shortName}`,
    description: `Ознакомьтесь с условиями согласия на обработку персональных данных компании ${siteConfig.company.fullName}.`,
    images: ['/thumbnail.jpg'],
  },
};

export default function AgreementPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-16">Согласие на обработку персональных данных</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Настоящим я, действуя свободно, своей волей и в своем интересе, при использовании Сервисов {siteConfig.company.fullName} (далее – Оператор), даю свое согласие на обработку моих персональных данных на следующих условиях:
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Перечень персональных данных, на обработку которых дается согласие</h2>
            <p className="text-muted-foreground mb-4">
              1.1. Я согласен(на) на обработку следующих персональных данных:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>фамилия, имя, отчество;</li>
              <li>пол;</li>
              <li>дата рождения;</li>
              <li>адрес проживания;</li>
              <li>адрес электронной почты (e-mail);</li>
              <li>номер телефона;</li>
              <li>реквизиты банковской карты или иного электронного средства платежа;</li>
              <li>IP-адрес;</li>
              <li>сведения о мобильном устройстве, с которого осуществляется доступ к Сервисам;</li>
              <li>иная информация, которую я предоставляю при использовании Сервисов.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              1.2. Я также даю согласие на обработку моих контактных данных (телефонная и/или адресная книга, контакты в мобильном устройстве) при отдельно данном мной согласии.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Цели обработки персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              Оператор обрабатывает мои персональные данные в следующих целях:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>осуществление технического управления Сервисами;</li>
              <li>проведение анализа и улучшение работы Сервисов;</li>
              <li>предоставление мне информации об оказываемых услугах и предлагаемых продуктах;</li>
              <li>осуществление маркетинговых и статистических исследований;</li>
              <li>создание и ведение учетной записи (регистрация в Сервисах);</li>
              <li>обработка платежей и транзакций;</li>
              <li>обеспечение обратной связи со мной.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Перечень действий с персональными данными</h2>
            <p className="text-muted-foreground mb-4">
              3.1. Я даю согласие на совершение Оператором следующих действий с моими персональными данными:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>сбор;</li>
              <li>запись;</li>
              <li>систематизация;</li>
              <li>накопление;</li>
              <li>хранение;</li>
              <li>уточнение (обновление, изменение);</li>
              <li>извлечение;</li>
              <li>использование;</li>
              <li>передача (распространение, предоставление, доступ);</li>
              <li>обезличивание;</li>
              <li>блокирование;</li>
              <li>удаление;</li>
              <li>уничтожение персональных данных.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              3.2. Обработка персональных данных может осуществляться как с использованием средств автоматизации, так и без их использования.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Условия передачи персональных данных третьим лицам</h2>
            <p className="text-muted-foreground mb-4">
              4.1. Я согласен(на) на передачу моих персональных данных следующим категориям третьих лиц:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>аффилированным лицам Оператора;</li>
              <li>партнерам Оператора;</li>
              <li>иным компаниям, связанным с Оператором.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              4.2. Передача моих персональных данных компаниям и частным лицам, не связанным с Оператором, осуществляется только при моем дополнительном отдельном согласии, которое я могу отозвать в любое время.
            </p>
            <p className="text-muted-foreground mb-4">
              4.3. Оператор вправе передавать мои персональные данные по требованию действующего законодательства, судебных решений или законным требованиям государственных органов.
            </p>
            <p className="text-muted-foreground mb-4">
              4.4. При передаче моих персональных данных за границу Оператор обеспечивает соблюдение действующего законодательства и Политики конфиденциальности.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Срок обработки персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              5.1. Согласие на обработку персональных данных действует с момента предоставления персональных данных при использовании Сервисов и до момента прекращения использования Сервисов.
            </p>
            <p className="text-muted-foreground mb-4">
              5.2. В случае отзыва согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без моего согласия при наличии оснований, указанных в пунктах 2–11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона № 152-ФЗ «О персональных данных».
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Порядок отзыва согласия</h2>
            <p className="text-muted-foreground mb-4">
              6.1. Я осознаю, что могу отозвать настоящее согласие в любое время путем направления письменного уведомления на адрес электронной почты Оператора или почтовый адрес, указанный в Политике конфиденциальности.
            </p>
            <p className="text-muted-foreground mb-4">
              6.2. В случае отзыва мной согласия на обработку персональных данных Оператор вправе прекратить предоставление мне доступа к Сервисам.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Иные условия</h2>
            <p className="text-muted-foreground mb-4">
              7.1. Настоящее согласие дается мной без ограничения срока его действия, если иное не предусмотрено законодательством Российской Федерации.
            </p>
            <p className="text-muted-foreground mb-4">
              7.2. Я подтверждаю, что ознакомлен(а) с Политикой конфиденциальности {siteConfig.company.fullName} и принимаю ее условия.
            </p>
            <p className="text-muted-foreground mb-4">
              7.3. Настоящее согласие регулируется и толкуется в соответствии с законодательством Российской Федерации.
            </p>
            
            <p className="text-sm text-muted-foreground mt-8 pt-4 border-t">
              Дата актуальности редакции: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}