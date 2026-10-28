export const SITE = {
  name: 'Grovera',

  title: 'Grovera | Shariah-Compliant Growth Partner',

  description:
    'Grovera helps educational institutes and purpose-driven businesses grow through strategic marketing rooted in Islamic values.',

  url: 'https://grovera.io',

  locale: 'en-PK',

  author: 'Grovera',

  whatsapp: '923260529836',

  // Linked from the footer and from the note under every WhatsApp button.
  privacyPolicyUrl: `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}privacy/` as string | null,

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
