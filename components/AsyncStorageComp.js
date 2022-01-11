import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";
export default function AsyncStorageComp() {
  const [name, setName] = useState("");
  const [asyncName, setAsyncName] = useState("");
  async function setAsync() {
    try {
      await AsyncStorage.setItem("User-Name", name);
    } catch (error) {
      //   console.log(error);
    }
  }
  async function getAsync() {
    try {
      await AsyncStorage.getItem("User-Name").then((val) => {
        if (val != null) {
          setAsyncName(val);
        }
      });
    } catch (error) {
      //   console.log(error);
    }
  }
  return (
    <View style={styles.View}>
      <Text style={{ fontSize: 20, margin: 20 }}>{asyncName}</Text>
      <TextInput
        onChangeText={(val) => {
          setName(val);
        }}
        placeholder="Eg. IEEE SSIT"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={setAsync}>
        <View style={styles.btn}>
          <Text style={{ fontSize: 20 }}>Set New Value in Async Storage</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={getAsync}>
        <View style={styles.btn}>
          <Text style={{ fontSize: 20 }}>
            Get the value stored in async storage
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "black",
    width: "50%",
    fontSize: 20,
    padding: 10,
    color: "red",
  },
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#d9534f",
    marginTop: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
