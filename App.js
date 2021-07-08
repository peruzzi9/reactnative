import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';

export default function App() {
 let [counter, setcounter] = useState(0) 
  return (
    <View style={styles.container}>
          <Text>Counter Value is !.... {counter} </Text> 
          <Button onPress={()=>setcounter(++counter)} title="Add" color="#000000" accessibilityLabel="Tap on Me"/>
          <Button onPress={()=>setcounter(--counter)} title="Reduce" color="#555555" accessibilityLabel="Tap on Me"/>
          <Button onPress={()=>alert("Hello to my first app with react native ...")}  title="Hello alert" color="#555777" />
          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
