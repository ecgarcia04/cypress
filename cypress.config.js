const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    'demoUserName': 'demo',
    'demoPassWord': 'Demo2022',
    'salUserName': 'bo',
    'salPassWord': 'Demo2022',
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
