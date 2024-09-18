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
              label: "Private Advertising",
              autogenerate: { directory: "docs/users/private-advertising" },
            },
            {
              label: "Mee Extension",
              autogenerate: { directory: "docs/users/mee-extension" },
            },
            {
              label: "Other Things",
              autogenerate: { directory: "docs/users/other-things" },
            },
          ],
        },
        {
          label: "For Developers",
          items: [
            {
              label: "Private Advertising",
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
            {
              label: "Other Things",
              autogenerate: { directory: "docs/developers/other-things" },
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
