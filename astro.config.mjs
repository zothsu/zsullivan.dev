// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { compileImageService } from "astro/assets/services/compile";

// https://astro.build/config
export default defineConfig({
  site: "https://zsullivan.dev",
  image: {
    service: compileImageService, // Use compile-time image optimization
  },
  },
});

