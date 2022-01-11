// moving to diffrent screen using navigation

import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function AllButtonComp({ navigation }) {
  const [loaded] = useFonts({
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  function onPressHandler(page) {
    navigation.navigate(page);
  }
  return (
    <View style={styles.view}>
      <View style={styles.heading}>
        <Text style={styles.heading_text}>This is navigation Page</Text>
      </View>
      <View style={styles.btn_view}>
        <Pressable onPress={() => onPressHandler("Basic styling Component")}>
          <Text style={[styles.btn, styles.left]}>
            Go to Basic Styling Page
          </Text>
        </Pressable>
        <Pressable onPress={() => onPressHandler("ChangeState Component")}>
          <Text style={[styles.btn, styles.left]}>
            Go to change State component
          </Text>
        </Pressable>
      </View>

      <View style={styles.btn_view}>
        <Pressable
          onPress={() => onPressHandler("FlatList Component")}
          android_ripple={{ color: "#5bc0de" }}
        >
          <Text style={[styles.btn, styles.right]}>
            Go to Flat list component Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "black",
    margin: 2,
    padding: 5,
    borderRadius: 6,
    fontSize: 15,
    height: 50,
    fontWeight: "bold",
    textAlign: "center",
    width: 180,
  },
  right: {
    backgroundColor: "#5cb85c",
  },
  left: {
    backgroundColor: "#428bca",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  btn_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    position: "absolute",
    top: 150,
  },
  heading_text: {
    fontFamily: "Lobster",
    fontSize: 30,
  },
});
