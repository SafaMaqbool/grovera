export const SITE = {
  name: 'Grovera',

  title: 'Grovera | Shariah-Compliant Growth Partner',

  description:
    'Grovera helps educational institutes and purpose-driven businesses grow through strategic marketing rooted in Islamic values.',

  url: 'https://grovera.io',

  locale: 'en-PK',

  author: 'Grovera',

  whatsapp: '923260529836',

  // No public Privacy Policy page exists yet. Set this to its URL once it is published;
  // the services page links to it automatically.
  privacyPolicyUrl: null as string | null,

  keywords: [
    'Marketing Agency',
    'Educational Marketing',
    'Digital Marketing Pakistan',
    'Shariah Compliant Marketing',
    'Grovera',
  ],
};

const whatsappMessage = 'Hi Grovera, I would like to know more about your services';

export const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
