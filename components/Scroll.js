import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

export default function Scroll() {
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
  function refreshApp() {
    console.warn("App is refreshed");
    console.log("APP is refreshed");
  }
  return (
    <ScrollView
      style={{
        backgroundColor: "#428bca",
      }}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={refreshApp}
          colors={["green", "red"]}
        />
      }
    >
      <View style={styles.parent}>
        {array.map((data, index) => {
          return (
            <Text style={styles.text} key={index}>
              {data}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 20,
    width: "80%",
    height: 100,
    textAlign: "center",
    fontSize: 30,
    paddingTop: 20,
    backgroundColor: "#f9f9f9",
  },
  parent: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
