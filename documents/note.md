# Create specified react native project
You can create specified react native project with bellow command.
```
npx react-native init projectname --version 0.62.3
```
Project will be created correctly. But you will get error when running.  
In package.json, dependencies block is maybe correct. But devDependencies block is not correct. devDependencies block does not compatible with dependencies block.
You can replace version specified devDependencies block from [upgrade-helper](https://react-native-community.github.io/upgrade-helper/?from=0.62.3&to=0.70.1).
After replacing to correct devDependencies block, you can run the app correctly.


