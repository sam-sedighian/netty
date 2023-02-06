import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 't3mwg9',
  videoUploadOnPasses: false,
  e2e: {
    baseUrl: 'https://netty.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
