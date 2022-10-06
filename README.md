This project is react native e2e testing example.

# Environments
I developed in this environments.
```
node: v14.18.0
macos: 12.5.1
Xcode: 13.4.1
```

# Run the application
```
npx react-native run-ios --simulator='iPhone 13 mini'
```

# Build target application
```
npx react-native bundle --entry-file index.js --platform ios --bundle-output ios/main.js.bundle --dev true
```

# Run detox e2e test
```
detox build -c ios
detox test -c ios
```

# Run appium e2e test
```
npx react-native run-ios --simulator='iPhone 13 mini'
jest -c jest.appium.json
```

