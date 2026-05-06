// lib/conig.ts
export const siteConfig = {
  company: {
    domain: 'https://maxtechnology.ru',
    shortName: 'Макстехнолоджи',
    fullName: 'ООО «МАКС ТЕХНОЛОДЖИ»',
    inn: '7701370771',
    kpp: '772501001',
    ogrn: '1137746838195',
    okved: '62.02',
    legalAddress: '115114, Москва, 1-й Павелецкий проезд, 1/42к2, помещение 1а/2п, офис 4',
    postalAddress: '115114, Москва, 1-й Павелецкий проезд, 1/42к2, помещение 1а/2п, офис 4',
    generalDirector: 'Богданенко Ирина Юрьевна (действует на основании Устава)',
  },
  contacts: {
    phoneRaw: '+74959551879',
    phoneFormatted: '+7 495 955-18-79',
    email: 'info@maxtechnology.ru',
    telegramUrl: 'https://t.me/maxtechru_bot',
    telegramHandle: '@maxtechru_bot',
  },
  bank: {
    name: 'МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК"',
    bik: '044525092',
    checkingAccount: '40702810570010389228',
    correspondentAccount: '30101810645250000092',
  },
  navigation: {
    header: [
      { label: 'Кейсы', href: '/cases' },
      { label: 'Услуги', href: '/services' },
      { label: 'Контакты', href: '/contacts' },
    ],
    footer: [
      { label: 'Кейсы', href: '/cases' },
      { label: 'Услуги', href: '/services' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'Реквизиты', href: '/requisites' },
      { label: 'Согласие на обработку данных', href: '/agreement' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
    ],
  },
};