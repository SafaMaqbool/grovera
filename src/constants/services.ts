export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'strategy' | 'ads' | 'leads' | 'social' | 'content' | 'email' | 'website';
}

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy & Planning',
    description: 'Clear marketing strategies built around your business, your audience, and your long-term goals.',
    icon: 'strategy',
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'Performance-focused campaigns designed to reach the right audience and deliver measurable results.',
    icon: 'ads',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'Helping businesses generate high-quality enquiries through targeted marketing strategies.',
    icon: 'leads',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Building a professional and consistent online presence that strengthens your brand.',
    icon: 'social',
  },
  {
    id: 'content-video',
    title: 'Content & Video Production',
    description: 'Creating content that informs, engages, and builds trust with your audience.',
    icon: 'content',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Building stronger customer relationships through purposeful email communication.',
    icon: 'email',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Modern, responsive websites designed to represent your business and support your growth.',
    icon: 'website',
  },
];
