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
      customCss: process.env.NO_GRADIENTS ? [] : ["/src/assets/landing.css"],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "For Users",
          items: [
            {
              label: "Start Here",
              items: [
                {
                  label: "Getting Started",
                  link: "docs/users/getting-started",
                },
              ],
            },
            {
              label: "Core Concepts",
              autogenerate: { directory: "docs/users/basics" },
            },
          ],
        },
        {
          label: "For Developers",
          items: [
            {
              label: "Start Here",
              items: [
                {
                  label: "Getting Started",
                  link: "docs/developers/getting-started",
                },
              ],
            },
          ],
        },
      ],
      components: {
        Sidebar: "./src/components/MultiSidebar.astro",
        EditLink: "./src/components/EditLink.astro",
      },
    }),
    tailwind(),
  ],
});
