import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2973B2" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});
