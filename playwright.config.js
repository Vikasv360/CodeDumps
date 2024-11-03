// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',

  //Timeout period for test to wait until the failure
  timeout: 30 * 1000,

  //This for assertions
  expect: {
    timeout: 5000,
  },
  //Report format
  reporter: 'html',

  //browser Properties
  use: {

    browserName: "chromium",
    // browserName: 'firefox',
    // browserName: 'webkit',
    headless: false,
    screenshot: 'on',
    trace:'retain-on-failure' //on,off,retain-on-failure
  },

});

