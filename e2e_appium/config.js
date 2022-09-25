const wdio = require('webdriverio');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'iOS',
    platformVersion: '15.5',
    deviceName: 'iPhone 13 mini',
    app: 'ios/build/Build/Products/Debug-iphonesimulator/e2eExample.app',
    automationName: 'XCUITest',
  },
};

export {opts};
