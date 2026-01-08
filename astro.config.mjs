// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MYC0-1 Docs",
      logo: {
        src: "/public/favicon.svg",
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Domza64/MYC0-1",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Installation", link: "/getting-started/installation/" },
            { label: "Quick Start", link: "/getting-started/quick-start/" },
          ],
        },
        {
          label: "Usage",
          items: [
            { label: "Playback", link: "/usage/playback/" },
            { label: "Playlists", link: "/usage/playlists/" },
          ],
        },
        {
          label: "Configuration",
          items: [{ label: "Storage", link: "/configuration/storage/" }],
        },
        {
          label: "Development",
          items: [
            { label: "Local Development", link: "/development/local-dev/" },
          ],
        },
        { label: "Contributing", link: "/contributing" },
        { label: "Roadmap", link: "#roadmap" },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
