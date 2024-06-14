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
      title: 'Conoce más',
      links: [
        { text: 'Glosario', href: 'https://assets.playbusiness.mx/uploads/public_file/file/560/792041970180067369glosario_pdf.pdf' },
        { text: 'Consultas, aclaraciones y reclamaciones', href: 'https://playbusiness.mx/une/nuevo' },
        { text: 'Actualizaciones y mejoras', href: 'https://play-business.notion.site/Actualizaciones-y-Mejoras-1464612da624404da711fbd1d8cbe12f' }
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Estados Financieros PB', href: 'https://play-business.notion.site/Estados-Financieros-Play-Business-fd77c8aa40d94efaa0435efd48cbdf05' },
        { text: 'Estadísticas Anexo 17', href: 'https://assets.playbusiness.mx/uploads/public_file/file/564/Anexo17-S2_2023(2).pdf' }
      ],
    },
    {
      title: 'Otros',
      links: [
        { text: 'Reclamar beneficiario', href: 'https://playbusiness.mx/reclamo-de-beneficiario/nuevo' },
      ],
    },
    {
      title: 'Políticas',
      links: [
        { text: 'Términos y condiciones', href: 'https://playbusiness.mx/legal-institucionalhttps://playbusiness.mxterminos-y-condiciones' },
        { text: 'Aviso de privacidad', href: 'https://playbusiness.mx/legal-institucional/aviso-de-privacidad' },
        { text: 'Políticas de cookies', href: 'https://playbusiness.mx/legal-institucional/politica-de-cookies' },
        { text: 'Servicio de continuidad', href: 'https://playbusiness.mx/legal-institucional/servicio-de-continuidad' },
        { text: 'Contratos de adhesión', href: 'https://playbusiness.mx/legal-institucional/contratos-de-adhesion' },
        { text: 'Consulta los costos y las comisiones de nuestros productos', href: 'https://playbusiness.mx/legal-institucional/conoce-nuestras-comisiones' },
        { text: 'Buró de Entidades Financieras', href: 'https://playbusiness.mx/paginas/legal-institucional/buro-entidades-financieras' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/playbusinessmx' },
    { ariaLabel: 'linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/play-business' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/playbusiness.mx' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/playbusiness' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `

  `,
};
