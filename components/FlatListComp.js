import React from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

export default function FlatListComp({ route }) {
  const array = [
    "title 1",
    "title 2",
    "title 3",
    "title 4",
    "title 5",
    "title 6",
    "title 7",
    "title 8",
  ];
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          padding: 10,
        }}
      >
        {route.params?.Message}
      </Text>
      <FlatList
        style={{
          backgroundColor: "#428bca",
        }}
        refreshControl={
          <RefreshControl refreshing={false} colors={["green", "red"]} />
        }
        data={array}
        renderItem={({ item }) => {
          return <Text style={styles.text}>{item}</Text>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    borderWidth: 2,
    borderColor: "black",
    marginTop: 40,
    margin: 40,
    marginBottom: 0,

    height: 100,
    textAlign: "center",
    fontSize: 30,
    paddingTop: 20,
    backgroundColor: "#f9f9f9",
  },
});
