// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "nodb.ai",
  tagline: "Run LLM Queries on your documents",
  favicon: "img/favicon.ico",
  url: "https://docs.nodb.ai",
  baseUrl: "/", // pathname under which your site is served
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("docusaurus-lunr-search")], // Used for local search.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "keywords", content: "AI, LMM, query your own docs" }],
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "nodb.ai",
        logo: {
          alt: "nodb.ai Logo",
          src: "img/dt-logo.png",
        },
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} Docstrail, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
