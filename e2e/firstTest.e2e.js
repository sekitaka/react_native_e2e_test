/* eslint-env detox/detox, jest */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    const imagePath = await device.takeScreenshot('after launch');
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  // it('should show "Ready?"', async () => {
  //   const imagePath = await device.takeScreenshot('opened general section');
  //   await expect(element(by.id('textId'))).toBeVisible();
  //   await expect(element(by.id('textId'))).toHaveText('Ready?');
  // });
  it('should show "Ready?"', async () => {
    // await expect("a").toEqual("a");
    // const imagePath = await device.takeScreenshot('opened general section');
    await expect(element(by.id('textId'))).toBeVisible();
    // await expect(element(by.id('textId'))).toHaveText('Ready?');
    // expect(1).toBe(1);
  });

  // it('should show "Go" after tap', async () => {
  //   await element(by.id('buttonId')).tap();
  //   await expect(element(by.id('textId'))).toHaveText('Go');
  // });
});
