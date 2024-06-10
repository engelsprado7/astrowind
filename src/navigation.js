import { getPermalink, getAsset } from './utils/permalinks';
import { Variant } from '~/enums';

export const headerData = {
  links: [
    //   {
    //     text: 'Homes',
    //     links: [
    //       {
    //         text: 'SaaS',
    //         href: getPermalink('/homes/saas'),
    //       },
    //       {
    //         text: 'Startup',
    //         href: getPermalink('/homes/startup'),
    //       },
    //       {
    //         text: 'Mobile App',
    //         href: getPermalink('/homes/mobile-app'),
    //       },
    //       {
    //         text: 'Personal',
    //         href: getPermalink('/homes/personal'),
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Pages',
    //     links: [
    //       {
    //         text: 'Features (Anchor Link)',
    //         href: getPermalink('/#features'),
    //       },
    //       {
    //         text: 'Services',
    //         href: getPermalink('/services'),
    //       },
    //       {
    //         text: 'Pricing',
    //         href: getPermalink('/pricing'),
    //       },
    //       {
    //         text: 'About us',
    //         href: getPermalink('/about'),
    //       },
    //       {
    //         text: 'Contact',
    //         href: getPermalink('/contact'),
    //       },
    //       {
    //         text: 'Terms',
    //         href: getPermalink('/terms'),
    //       },
    //       {
    //         text: 'Privacy policy',
    //         href: getPermalink('/privacy'),
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Landing',
    //     links: [
    //       {
    //         text: 'Lead Generation',
    //         href: getPermalink('/landing/lead-generation'),
    //       },
    //       {
    //         text: 'Long-form Sales',
    //         href: getPermalink('/landing/sales'),
    //       },
    //       {
    //         text: 'Click-Through',
    //         href: getPermalink('/landing/click-through'),
    //       },
    //       {
    //         text: 'Product Details (or Services)',
    //         href: getPermalink('/landing/product'),
    //       },
    //       {
    //         text: 'Coming Soon or Pre-Launch',
    //         href: getPermalink('/landing/pre-launch'),
    //       },
    //       {
    //         text: 'Subscription',
    //         href: getPermalink('/landing/subscription'),
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Blog',
    //     links: [
    //       {
    //         text: 'Blog List',
    //         href: getBlogPermalink(),
    //       },
    //       {
    //         text: 'Article',
    //         href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //       },
    //       {
    //         text: 'Article (with MDX)',
    //         href: getPermalink('markdown-elements-demo-post', 'post'),
    //       },
    //       {
    //         text: 'Category Page',
    //         href: getPermalink('tutorials', 'category'),
    //       },
    //       {
    //         text: 'Tag Page',
    //         href: getPermalink('astro', 'tag'),
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Widgets',
    //     href: '#',
    //   },
    // 
  ],

  actions: [
    { text: 'Regístrate', href: 'https://playbusiness.mx/pre-registro', target: '_blank', variant: Variant.Secondary },
    { text: 'Inicia sesión', href: 'https://playbusiness.mx/entrar', target: '_blank', variant: Variant.Link }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `

  `,
};
