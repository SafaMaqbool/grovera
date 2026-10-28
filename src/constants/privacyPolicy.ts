// Copy for the Privacy Policy page (/privacy). Supplied by Grovera, 27 October 2026;
// keep wording and order as written. A string is a paragraph; an array is a bullet list.

export type PolicyBlock = string | string[];

export interface PolicySection {
  title: string;
  blocks: PolicyBlock[];
}

export const privacyLastUpdated = { label: '27 October 2026', iso: '2026-10-27' };

export const privacyContactEmail = 'grovera.marketing@gmail.com';

export const privacySections: PolicySection[] = [
  {
    title: 'Introduction',
    blocks: [
      'At Grovera, we respect your privacy. This Privacy Policy explains what personal information we may collect when you visit our website or contact us, how we use it, and how we handle it.',
    ],
  },
  {
    title: 'What Information We Collect',
    blocks: [
      'When you contact us or discuss our services, we may receive the following information:',
      [
        'Your name, phone number and email address.',
        'Your business name, website and social media profiles.',
        "Details about your business, marketing needs and the services you're interested in.",
        'Information you include in messages or emails you send us.',
      ],
      'Our website may also collect technical information, such as your browser type or IP address.',
    ],
  },
  {
    title: 'How We Use Your Information',
    blocks: [
      'We may use your information to:',
      [
        'Respond to your questions and enquiries.',
        'Understand your business needs and discuss our services.',
        'Prepare proposals and quotations.',
        'Deliver and manage agreed services.',
        'Communicate with you about your projects.',
        'Maintain business records and protect our website.',
        'Meet applicable legal requirements.',
      ],
    ],
  },
  {
    title: 'WhatsApp and Email',
    blocks: [
      'You can contact Grovera through WhatsApp or email.',
      'When you message us on WhatsApp, we can see your phone number and the information you send. When you email us, we receive your email address and the contents of your message.',
      'We use this information to respond to your enquiries and communicate with you about our services.',
      'WhatsApp and email are third-party services and have their own privacy policies and practices.',
    ],
  },
  {
    title: 'Cookies and Website Tracking',
    blocks: [
      'Our website may use cookies or similar technologies to support website functionality and understand how visitors use our website.',
      "The information collected through these technologies depends on the website's configuration and the tools in use.",
    ],
  },
  {
    title: 'When We Share Information',
    blocks: [
      'We may share personal information with service providers when necessary to operate our website, communicate with you or manage our business.',
      'We may also disclose information when required by law or when necessary to protect our legal rights.',
      'We do not intend to sell your personal information.',
    ],
  },
  {
    title: 'How We Protect Your Information',
    blocks: [
      'We take reasonable steps to protect the personal information we handle against unauthorized access, loss or misuse.',
      'However, no method of storing or transmitting information online can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'How Long We Keep Information',
    blocks: [
      'We keep personal information for as long as reasonably necessary to respond to enquiries, provide our services, maintain business records and meet applicable legal requirements.',
      'The length of time we retain information depends on why it was collected and whether it is needed for legitimate business or legal purposes.',
    ],
  },
  {
    title: 'Your Privacy Requests',
    blocks: [
      'If you have questions about your personal information or wish to request access to it, correct it or ask us to delete it, you can contact us using the email address below.',
      'We will consider your request in accordance with applicable law and any legitimate need to retain the information.',
    ],
  },
  {
    title: 'Links to Other Websites',
    blocks: [
      'Our website may contain links to other websites or services. These are operated by third parties and may have their own privacy policies.',
      'We encourage you to read their privacy policies before sharing personal information with them.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    blocks: [
      'We may update this Privacy Policy when our business practices, website or applicable requirements change.',
      'Any updates will be published on this page with the revised date.',
    ],
  },
  {
    title: 'Contact Us',
    blocks: [
      'If you have any questions about this Privacy Policy or how Grovera handles personal information, you can contact us at:',
    ],
  },
];
