// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import obfuscator from "vite-plugin-javascript-obfuscator";

// https://astro.build/config
console.log("OBFUSCATE env var:", process.env.OBFUSCATE);
export default defineConfig({
  // Using './' as base allows the site to be deployed to any subdirectory
  // or opened via filesystem (mostly) by generating relative links.
  // GitHub Pages configuration
  // "site" should be your user/organization pages root
  site: "https://francismul.github.io",
  // "base" must be the repository name when deploying to https://<user>.github.io/<repo>/
  base: "/wild_kingdom",

  integrations: [
    react(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Wild Kingdom",
        short_name: "Wild Kingdom",
        description: "Experience the majesty of Africa's Big Five",
        theme_color: "#000000",
        background_color: "#000000",
        lang: "en",
        // Set scope/start_url to the repository base for GitHub Pages
        scope: "/wild_kingdom/",
        display: "standalone",
        start_url: "/wild_kingdom/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
      },
      // devOptions: {
      //   enabled: true
      // }
    }),
  ],

  vite: {
    plugins: [
      tailwindcss(),
      process.env.OBFUSCATE === "true" && {
        ...obfuscator({
          debugger: true,
          options: {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.75,
            stringArrayEncoding: ["base64"],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 2,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 4,
            stringArrayWrappersType: "function",
            stringArrayThreshold: 0.75,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
          },
        }),
        apply: "build",
        enforce: "post",
      },
    ],
    build: {
      sourcemap: process.env.OBFUSCATE !== "true",
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ["gsap", "gsap/ScrollTrigger"],
            lenis: ["lenis"],
          },
        },
      },
    },
  },

  image: {
    // specific domains to optimize
    domains: ["images.pexels.com"],
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
