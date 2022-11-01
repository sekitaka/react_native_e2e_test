/* eslint-env detox/detox, jest */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "Ready?"', async () => {
    await expect(element(by.id('textId'))).toBeVisible();
    await expect(element(by.id('textId'))).toHaveText('Ready?');
    const imagePath = await device.takeScreenshot('sc1');
  });

  it('should show "Go" after tap', async () => {
    await element(by.id('buttonId')).tap();
    await expect(element(by.id('textId'))).toHaveText('Go');
    const imagePath = await device.takeScreenshot('sc2');
  });
});
