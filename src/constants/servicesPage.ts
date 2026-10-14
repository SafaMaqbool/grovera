// Copy for the link-only services page (/services). Approved by Grovera's
// Marketing & Media Head, 13 October 2026; keep wording and order as written.

export interface IconItem {
  title: string;
  description: string;
  icon: string;
}

export const servicesHero = {
  title: 'Grow Your Business Without Compromising Your Values.',
  description:
    'Effective marketing, grounded in Islamic principles. From paid advertising and social media management to graphic design, video editing and website development, we help businesses grow without compromising on what matters.',
  cta: 'Message us on WhatsApp',
};

export const problems: IconItem[] = [
  {
    title: 'No clear growth plan.',
    description:
      'Not sure what to focus on or where your marketing budget should go? We help you identify priorities and build a strategy around your business goals.',
    icon: 'heroicons:map',
  },
  {
    title: 'Not enough of the right eyes.',
    description:
      'Struggling to reach the people most likely to be interested in your business? We help you create targeted campaigns and relevant content to reach the right audience.',
    icon: 'heroicons:eye',
  },
  {
    title: 'Visitors, but no enquiries.',
    description:
      "If people visit your website but don't get in touch, something may be getting in the way. We help improve your website experience and make it easier for visitors to take the next step.",
    icon: 'heroicons:cursor-arrow-rays',
  },
];

export const servicesIntro = {
  title: 'How We Help Your Business Grow.',
  description:
    'We bring together the services your business needs to build a stronger digital presence.',
};

export const serviceList: IconItem[] = [
  {
    title: 'Paid Advertising',
    description:
      'Targeted ad campaigns designed to reach relevant audiences and generate enquiries.',
    icon: 'heroicons:megaphone',
  },
  {
    title: 'Social Media Management',
    description:
      'Content planning, publishing and account management to maintain a consistent presence.',
    icon: 'heroicons:share',
  },
  {
    title: 'Graphic Design',
    description: 'Social media posts, carousels, ad creatives and other visual materials.',
    icon: 'heroicons:paint-brush',
  },
  {
    title: 'Video Editing',
    description: "Edited video content for your brand's marketing and social media.",
    icon: 'heroicons:film',
  },
  {
    title: 'Website Development',
    description:
      'Websites designed to communicate your offer clearly and make it easier for visitors to take action.',
    icon: 'heroicons:globe-alt',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      "Improve your website's search visibility and help relevant audiences discover your business.",
    icon: 'heroicons:magnifying-glass',
  },
  {
    title: 'Email Marketing',
    description:
      'Campaigns that help businesses communicate with subscribers, nurture leads and maintain customer relationships.',
    icon: 'heroicons:envelope',
  },
  {
    title: 'Lead Generation',
    description:
      'Campaigns and supporting processes focused on attracting relevant enquiries for your business.',
    icon: 'heroicons:users',
  },
];

export const standardsIntro = {
  title: 'Our Marketing Standards.',
  description:
    'We help businesses grow while keeping our work within Islamic principles and Shariah guidelines.',
};

export const standards: IconItem[] = [
  {
    title: 'Content Review',
    description: 'Every piece of content is reviewed before publication.',
    icon: 'heroicons:document-check',
  },
  {
    title: 'No Music',
    description: "We don't add music to our videos.",
    icon: 'heroicons:speaker-x-mark',
  },
  {
    title: 'Modest Visuals',
    description: 'We use modest visuals.',
    icon: 'heroicons:eye',
  },
  {
    title: 'Evidence-Based Claims',
    description: "Before making a claim, we make sure there's evidence to support it.",
    icon: 'heroicons:check-badge',
  },
  {
    title: 'Permissible Products and Services',
    description:
      'We turn down work involving impermissible products or services, including alcohol, gambling and interest-based lending.',
    icon: 'heroicons:shield-check',
  },
];

export const steps = [
  {
    title: 'Discuss',
    description: 'Tell us about your business, goals and what you need help with.',
  },
  {
    title: 'Plan',
    description: 'We agree on the work, priorities and cost before getting started.',
  },
  {
    title: 'Deliver',
    description: 'We carry out the agreed work and keep you involved throughout.',
  },
  {
    title: 'Review',
    description: 'We review progress against the goals and deliverables agreed at the start.',
  },
];

export const servicesFaq = [
  {
    question: 'Will this change my ads?',
    answer:
      "Yes. Our ads follow our standards, including no music in our videos and modest visuals. We'll explain what this means for your brand before work begins.",
  },
  {
    question: 'Do you work only with Muslim-owned businesses?',
    answer:
      'No. We work with businesses of any ownership or faith, provided their products and services meet our standards.',
  },
  {
    question: 'What does it cost?',
    answer:
      "Pricing depends on the services you need and the scope of the work. Tell us what you're looking for, and we'll provide a quote.",
  },
  {
    question: 'How soon will we see results?',
    answer:
      "Timelines depend on the service, your goals and your starting point. We'll discuss realistic expectations with you before work begins.",
  },
];

export const servicesCta = {
  title: "Tell Us Where You're Stuck.",
  description: 'One message is enough to get started.',
  cta: 'Message us on WhatsApp',
};
