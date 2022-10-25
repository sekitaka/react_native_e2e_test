/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { getReceiptIOS } from "react-native-iap";

const App: () => React$Node = () => {
  const updateText = async () => {
    try {
      const receipt = await getReceiptIOS();
      console.log("receipt", receipt);
      setText('Go');
    } catch (e){
      console.log("ERR",e);
      setText('NO');
    }
  };
  const [text, setText] = useState('Ready?');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}} testID="textId">
        {text}
      </Text>
      <Button title="Press" onPress={updateText} testID="buttonId" />
    </View>
  );
};

export default App;
