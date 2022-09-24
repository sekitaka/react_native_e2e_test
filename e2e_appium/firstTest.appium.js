/* eslint-env jest */
const wdio = require('webdriverio');
import {opts} from './config';

describe('Appium test', () => {
  let driver;
  beforeAll(async () => { });

  beforeEach(async () => {
    driver = await wdio.remote(opts);
  });
  afterEach(async () => {
    await driver.deleteSession();
  });

  afterAll(async () => {
    // await driver.quit();
  });

  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  it('should show "Ready?"', async () => {
    const button = await driver.$('~buttonId');
    const text = await driver.$('~textId');
    const beforeText = await text.getValue();
    expect(beforeText).toEqual('Ready?');
  });

  it('should show "Go" after tap', async () => {
    const button = await driver.$('~buttonId');
    const text = await driver.$('~textId');
    const beforeText = await text.getValue();
    await button.click();
    await sleep(); // It needs to wait for reflecting state to UI.
    const afterText = await text.getValue();
    expect(beforeText).toEqual('Ready?');
    expect(afterText).toEqual('Go');
  });
});
