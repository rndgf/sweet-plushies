import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sweet-plushies.local',
  vite: {
    plugins: [tailwindcss()],
  },
});
