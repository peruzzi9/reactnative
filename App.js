import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,Button, View , Pressable } from 'react-native';

export default function App() {
 let [counter, setcounter] = useState(0) 
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Counter Value is !.... {counter} </Text> 
          <Button onPress={()=>setcounter(++counter)} title="Add" color="#000000" accessibilityLabel="Tap on Me"/>
          <Button onPress={()=>setcounter(--counter)} title="Reduce" color="#555555" accessibilityLabel="Tap on Me"/>
          <Pressable style={styles.button} 
                     onPress={()=>alert("Hello to my first app with react native ...")}>
            <Text style={styles.buttonText}>Hello Alert...</Text>
          </Pressable>
          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body : { backgroundColor:'#fff979'},
  text : { 
    color:'#000999',
    fontSize :20 ,
    fontStyle:'italic',
    margin:10,
    padding:10
  },
  buttonText : { 
    color:'#fff979',
    fontSize :20 ,
    fontStyle:'italic',
    margin:10,
    padding:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    elevation: 100,
    margin : 10,
    backgroundColor: '#224e79',
    color:'#d9e447'
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fffff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
