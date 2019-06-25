import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ClapButton from "./src/components/ClapButton";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClapButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});
