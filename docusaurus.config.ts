import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'AlphaApollo',
  tagline: 'RL training framework for LLMs with tooling and agent systems',
  favicon: 'img/TMLR.ico',

  future: {
    v4: true, 
  },

  url: 'https://alphaapollo.org',
  baseUrl: '/AlphaApollo/',

  organizationName: 'tmlr-group', 
  projectName: 'AlphaApollo', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AlphaApollo',
      logo: {
        alt: 'AlphaApollo Logo',
        src: 'img/TMLR.png',
      },
      items: [
        { to: '/multi-turn-agentic-reasoning', label: 'Agentic Reasoning', position: 'left' },
        { to: '/multi-turn-agentic-learning', label: 'Agentic Learning', position: 'left' },
        { to: '/multi-round-agentic-evolution', label: 'Agentic Evolution', position: 'left' },
        { href: 'https://github.com/tmlr-group/AlphaApollo', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AlphaApollo. Built with Docusaurus. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'toml', 'json', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
