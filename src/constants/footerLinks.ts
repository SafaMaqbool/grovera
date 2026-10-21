import { serviceList } from './servicesPage';

export const footerLinks = {
  company: [
    { label: 'Our Values', href: '#values' },
    { label: 'Why Grovera Exists', href: '#story' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Experience', href: '#experience' },
  ],
  services: serviceList.map((service) => ({ label: service.title, href: '#services' })),
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
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
