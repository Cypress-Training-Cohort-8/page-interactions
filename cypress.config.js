const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    viewportHeight: 960,
    viewportWidth: 1530,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
