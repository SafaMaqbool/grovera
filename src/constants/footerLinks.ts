import { serviceList } from './servicesPage';
import { SITE } from './site';

export const footerLinks = {
  company: [
    { label: 'Our Values', href: '#values' },
    { label: 'Why Grovera Exists', href: '#story' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Experience', href: '#experience' },
  ],
  services: serviceList.map((service) => ({ label: service.title, href: '#services' })),
  legal: [
    // A null href renders as a disabled "Coming soon" label.
    { label: 'Privacy Policy', href: SITE.privacyPolicyUrl },
    { label: 'Terms of Service', href: null },
  ],
  icons: [
    { label: 'X (Twitter)', href: 'https://x.com/groveradigital', icon: 'simple-icons:x' },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/groveradigital/',
      icon: 'simple-icons:instagram',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/grovera-digital/',
      icon: 'simple-icons:linkedin',
    },
  ],
};
