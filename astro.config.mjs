import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

export const site = "https://private-advertising.mee.foundation/";
export const meeFoundation = "https://mee.foundation/";
export const github =
  "https://github.com/MeeFoundation/private-advertising-website";
export const discord =
  "https://discord.com/channels/1275848491964436491/1275848492413223025";
export const sharedConfig = {
  title: "Mee Private Advertising",
  logo: {
    light: "/src/assets/logo-light.svg",
    dark: "/src/assets/logo-dark.svg",
    replacesTitle: true,
  },
};

export const header = {
  logoLink: meeFoundation,
  links: [
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about-us",
    },
    {
      name: "Docs",
      link: "/docs",
      id: "docs",
    },
  ],
  rightLinks: [
    {
      name: "Join us",
      link: discord,
      icon: "discord",
      target: "_blank",
      id: "discord",
    },
  ],
  footerLinks: [
    {
      link: `${meeFoundation}about/`,
      name: "About",
      id: "about",
    },
    {
      link: "/docs/",
      name: "Docs",
      id: "docs",
    },
  ],
};

export const footer = {
  links: [
    {
      link: "https://x.com/mee_foundation",
      icon: "twitter-x",
      target: "_blank",
    },
    {
      link: github,
      icon: "github",
      target: "_blank",
    },
    {
      link: discord,
      icon: "discord",
      target: "_blank",
    },
  ],
  rightLinks: [
    {
      link: `${meeFoundation}about/`,
      name: "About",
    },
    {
      link: "/docs/",
      name: "Docs",
    },
  ],
};
// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: site,
  integrations: [
    starlight({
      ...sharedConfig,
      disable404Route: true,
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl:
          "https://github.com/meefoundation/private-advertising-website/edit/main/",
      },
      social: {
        github: github,
      },
      customCss: process.env.NO_GRADIENTS
        ? []
        : [
            "/src/assets/landing.css",
            "/src/styles/base.css",
            "bootstrap-icons/font/bootstrap-icons.css",
          ],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "Users",
          items: [
            {
              label: "Common",
              autogenerate: { directory: "docs/users/private-advertising" },
            },
            {
              label: "Mee Extension",
              autogenerate: { directory: "docs/users/mee-extension" },
            },
          ],
        },
        {
          label: "Providers",
          items: [
            {
              label: "Common",
              autogenerate: {
                directory: "docs/providers/private-advertising",
              },
            },
            {
              label: "Mee Interest Server",
              autogenerate: {
                directory: "docs/providers/mee-interest-server",
              },
            },
            {
              label: "Mee Extension",
              autogenerate: { directory: "docs/providers/mee-extension" },
            },
          ],
        },
        {
          label: "Developers",
          items: [
            {
              label: "Common",
              autogenerate: {
                directory: "docs/developers/private-advertising",
              },
            },
            {
              label: "Mee Interest Server",
              autogenerate: {
                directory: "docs/developers/mee-interest-server",
              },
            },
            {
              label: "Mee Extension",
              autogenerate: { directory: "docs/developers/mee-extension" },
            },
          ],
        },
      ],
      components: {
        Sidebar:
          "./node_modules/mee-components/src/components/starlight/Sidebar.astro",
        EditLink:
          "./node_modules/mee-components/src/components/starlight/EditLink.astro",
        PageFrame:
          "./node_modules/mee-components/src/components/starlight/PageFrame.astro",
        Footer:
          "./node_modules/mee-components/src/components/starlight/Footer.astro",
        Header: "./src/components/DocsHead.astro",
      },
    }),
    tailwind(),
  ],
});
