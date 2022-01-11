import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import photo from "../assets/images/application-development.svg";
export default function BasicStyling({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("FlatList Component");
  };
  const [loaded] = useFonts({
    NotoSans: require("../assets/fonts/NotoSans-Regular.ttf"),
    VujahdayScript: require("../assets/fonts/VujahdayScript-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>This is a tutorial of basic styling</Text>
      <Image
        style={styles.photo}
        source={require("../assets/images/chat.png")}
      />
      <Pressable style={[styles.text]} onPress={onPressHandler}>
        <Text style={{ textAlign: "center" }}>Go to Next Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fec7b9",
    height: "100%",
  },

  text: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#ffe0bd",
    fontSize: 20,
    margin: 20,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "NotoSans",
    fontWeight: "bold",
  },
  photo: {
    height: 400,
    width: 400,
  },
});
