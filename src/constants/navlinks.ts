export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Our Values', href: '#tagline' },
  { label: 'How We Help', href: '#services' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Experience', href: '#experience' },
  { label: 'FAQ', href: '#faq' },
];

export const footerNav = {
  company: [
    { label: 'Our Values', href: '#tagline' },
    { label: 'Why Grovera Exists', href: '#why-exists' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'Experience', href: '#experience' },
  ],
  services: [
    { label: 'Strategy & Planning', href: '#services' },
    { label: 'Paid Advertising', href: '#services' },
    { label: 'Lead Generation', href: '#services' },
    { label: 'Social Media Management', href: '#services' },
    { label: 'Content & Video Production', href: '#services' },
    { label: 'Email Marketing', href: '#services' },
    { label: 'Website Development', href: '#services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};
