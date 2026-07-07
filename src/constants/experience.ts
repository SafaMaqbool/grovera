export interface Stat {
  value: string;
  label: string;
  icon: 'impressions' | 'leads' | 'enrolments';
}

export const experienceStats: Stat[] = [
  { value: '9M+', label: 'Impressions Generated', icon: 'impressions' },
  { value: '10,000+', label: 'Leads Generated', icon: 'leads' },
  { value: '2,500+', label: 'Student Enrolments', icon: 'enrolments' },
];

export interface ExperienceFeature {
  title: string;
  description: string;
}

export const experienceFeatures: ExperienceFeature[] = [
  {
    title: 'Integrated Marketing',
    description: 'Creating cohesive marketing strategies across multiple digital channels.',
  },
  {
    title: 'End-to-End Campaign Management',
    description: 'From strategy and planning to paid advertising, content, and execution.',
  },
];
