import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

export const site = "https://private-advertising.mee.foundation/";

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
          label: "Publishers",
          items: [
            {
              label: "Common",
              autogenerate: {
                directory: "docs/publishers/private-advertising",
              },
            },
            {
              label: "Mee Interest Server",
              autogenerate: {
                directory: "docs/publishers/mee-interest-server",
              },
            },
            {
              label: "Mee Extension",
              autogenerate: { directory: "docs/publishers/mee-extension" },
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
