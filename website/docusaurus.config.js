module.exports = {
  title: 'Responsible AI Collection',
  tagline: 'Are your machine learning models and systems responsible ?',
  url: 'https://konabuta.github.io',
  baseUrl: '/responsible-ai-web/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'konabuta', // Usually your GitHub org/user name.
  projectName: 'responsible-ai-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Responsible AI',
      logo: {
        alt: 'Azure ML Logo',
        src: 'img/azureml.svg',
      },
      items: [
        {to: 'docs/research/', label: 'Research', position: 'left'},
        //{to: 'docs/cheatsheet/', label: 'Document', position: 'left',},
        //{to: 'docs/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {
              label: 'Collections',
              to: 'research/',
            },
            {
              label: 'Second Doc',
              to: 'research/reference.md',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
