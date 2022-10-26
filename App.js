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
import { getPurchaseHistory, getReceiptIOS, validateReceiptIos } from "react-native-iap";

const App: () => React$Node = () => {
  const updateText = async () => {
    setText('Go');
    try {
      const receipt = await getReceiptIOS();
      // const aa = await getPurchaseHistory(); // Need to sign in with apple ID
      // console.log("history", aa);



      const receiptBody = {
        'receipt-data': "receipt",
        password: '69f51acc84b44940967e856f61b55652',
      };

      const result = await validateReceiptIos(receiptBody, !!null);

      console.log("receipt", receipt);
      console.log("result", result);
    } catch (e){
      console.log("ERR",e);
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
