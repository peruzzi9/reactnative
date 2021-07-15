import React, { useState } from "react";
import { Text, Button, View, Pressable } from "react-native";
import styles from "../styles";

export default Counter = () => {
  let [counter, setcounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter Value is !.... {counter} </Text>
      <Button
        onPress={() => setcounter(++counter)}
        title="Add"
        color="#000000"
        accessibilityLabel="Tap on Me"
      />
      <Button
        onPress={() => setcounter(--counter)}
        title="Reduce"
        color="#555555"
        accessibilityLabel="Tap on Me"
      />
      <Pressable
        style={styles.button}
        onPress={() => alert("Hello to my first app with react native ...")}
      >
        <Text style={styles.buttonText}>Hello Alert...</Text>
      </Pressable>
    </View>
  );
};
