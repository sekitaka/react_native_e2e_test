# Create specified react native project
You can create specified react native project with bellow command.
```
npx react-native init projectname --version 0.62.3
```
Project will be created correctly. But you will get error when running.  
In package.json, dependencies block is maybe correct. But devDependencies block is not correct. devDependencies block does not compatible with dependencies block.
You can replace version specified devDependencies block from [upgrade-helper](https://react-native-community.github.io/upgrade-helper/?from=0.62.3&to=0.70.1).
After replacing to correct devDependencies block, you can run the app correctly.

# Detox
Detox 19.x requires jest 27.2.5 [here(https://wix.github.io/Detox/docs/guide/jest/)]
## Create first e2e test
detox init -r jest

## .detoxrc.json
It is a setting file. You can specify which simulator you use.

# Appium
Appium requires appium drivers each platform. [For iOS:XCUITest driver](https://appium.io/docs/en/drivers/ios-xcuitest/index.html) [For android:Uiautomator2 driver](https://appium.io/docs/en/drivers/android-uiautomator2/index.html)
Understanding driver is important.

## About element selectors
Mobile application's selector documentation is here.
https://webdriver.io/docs/selectors/#mobile-selectors

```
# find by id
client.$('~buttonId');
```



# TIPS
## React Native: Unexpected token ':'. Expected a ')' or a ',' after a parameter declaration.
```
rm yarn.lock # if yarn.lock exists
watchman watch-del-all
rm -rf node_modules
npm ci
# Re-run
```

## ESLint: 'describe' is not defined.(no-undef)
I got this eslint error firstTest.e2e.js.
I need to add eslint plugins. These packages are eslint-plugin-jest and eslint-plugin-detox.
I also needed to edit .eslintrc.js to add plugins.
I also add `/* eslint-env detox/detox, jest */` into firstTest.e2e.js's top line.

https://www.npmjs.com/package/eslint-plugin-jest
https://www.npmjs.com/package/eslint-plugin-detox

## What matcher can I use with Detox?
https://wix.github.io/Detox/docs/api/expect/
