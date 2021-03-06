import React, { useState } from "react";
import { Text, Button, View, Pressable } from "react-native";
import styles from "../styles";

export default Responsive = () => {
  return (
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
};
