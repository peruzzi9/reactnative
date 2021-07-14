import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Pressable } from "react-native";

export default function App() {
  let [counter, setcounter] = useState(0);
  let [displayResponsive, setdisplayResponsive] = useState(false);
  return !displayResponsive ? (
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

      <Button
        onPress={() => setdisplayResponsive(!displayResponsive)}
        title="Display Responsive"
        color="#555fff"
        accessibilityLabel="Tap on Me"
      />

      <StatusBar style="auto" />
    </View>
  ) : (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.text}>Responsive Test ... </Text>
        <Text style={styles.text}>header area </Text>
        {/* text is not inside view */}
        <View style={styles.topMenu}>
          <Text style={styles.textHeader}>1</Text>
          <Text style={styles.textHeader}>2</Text>
          <Text style={styles.textHeader}>3</Text>
        </View>
        {/* each text is  inside view */}
        <View style={styles.topMenu}>
          <View style={styles.menuItem}>
            <Text style={styles.textHeader}>home</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.textHeader}>services</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.textHeader}>contactus</Text>
          </View>
        </View>
      </View>

      {/* inline styling example here */}
      <View style={styles.content}>
        <Text style={styles.text}>content area</Text>
        <Button
          onPress={() => setdisplayResponsive(!displayResponsive)}
          title="Display Responsive"
          color="#555fff"
          accessibilityLabel="Tap on Me"
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center", //changed value of alignItems
            width: "90%",
            backgroundColor: "black",
          }}
        >
          <View
            style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>footer area</Text>

        <View style={styles.buttomMenu}>
          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column", //default is column
    alignItems: "stretch",
    justifyContent: "center",
  },
  text: {
    color: "#000999",
    fontSize: 20,
    fontStyle: "italic",
    margin: 2,
  },
  textHeader: {
    color: "#000999",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: "#fff979",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    elevation: 100,
    margin: 10,
    backgroundColor: "#224e79",
    color: "#d9e447",
  },
  container: {
    flex: 1,
    backgroundColor: "#fffff1",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1.5,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 5,
    backgroundColor: "#e8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffb3d9",
    alignItems: "center",
    justifyContent: "center",
  },
  topMenu: {
    flex: 1,
    backgroundColor: "#00ffaa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
  },
  buttomMenu: {
    flex: 1,
    backgroundColor: "#ffff00",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "50%",
  },
  menuItem: {
    height: 30,
    backgroundColor: "#ff0080",
    alignItems: "center",
    justifyContent: "center",
  },
});
