// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://fulcrumagentics.com",
  base: "/",
  integrations: [icon()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // don't touch this!
  },
});


