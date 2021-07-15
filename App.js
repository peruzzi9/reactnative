import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {  Text, Button, View } from "react-native";
import styles from './styles'; 

import { NativeRouter, Route, Link } from "react-router-native";
import  Home  from "./components/Home";
import  About  from "./components/About";
import  Counter  from "./components/Counter";
import  Responsive  from "./components/Responsive";

export default function App() {
   return (
    <NativeRouter>
    <View style={styles.body}>
      <View style={styles.nav}>
         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7"style={styles.navItem} >
          <Text>About</Text>
        </Link> 
        <Link to="/counter" underlayColor="#f0f4f7"style={styles.navItem} >
          <Text>Counter</Text>
        </Link> 
        <Link to="/responsive" underlayColor="#f0f4f7"style={styles.navItem} >
          <Text>Responsive</Text>
        </Link> 
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/responsive" component={Responsive} />


      <StatusBar style="auto" />
    </View>
    </NativeRouter>
  )  ;
}

