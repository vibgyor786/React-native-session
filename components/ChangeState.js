import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
  ToastAndroid,
  Modal,
} from "react-native";

export default function ChangeState({ navigation, route }) {
  const { Message, MessageId } = route.params;
  let [update, setUpdate] = useState(0);
  function button_press() {
    setUpdate(update + 1);
    navigation.navigate("Flat List Component", {
      Message: "Message from Change state component",
    });
  }
  return (
    <View style={styles.parent}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        {update} {route.params?.Message}
      </Text>

      <Button
        style={styles.btn}
        title="Submit and Move to another component"
        color="#d9534f"
        onPress={button_press}
      ></Button>
    </View>
  );
}

function ChangeStateUsingTouchables() {
  let [update, setUpdate] = useState(0);
  function button_press() {
    setUpdate(update + 1);
    // Alert.alert("Warning", "You have clicked button one time", [
    //   { text: "ok", onPress: () => console.warn("OK IS CLICKED") },
    //   { text: "Cancel", onPress: () => console.warn("CANCEL IS CLICKED") },
    //   { text: "EXIT", onPress: () => console.warn("EXIT IS CLICKED") },
    // ]);
    // ToastAndroid.showWithGravity(
    //   "Toast android show with gravity",
    //   ToastAndroid.SHORT,
    //   ToastAndroid.CENTER
    // );
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      10,
      20
    );
    // ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  }
  const [show, setShow] = useState(false);
  function customModal() {
    setShow(true);
  }
  return (
    <View style={styles.parent}>
      <Modal
        transparent
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}
      >
        <View style={styles.modal}>
          <Text>This is modal</Text>
          <Button title="close" onPress={() => setShow(false)}></Button>
        </View>
      </Modal>
      <TouchableOpacity style={styles.btn} onPress={button_press}>
        <Text style={{ color: "white", fontSize: 20 }}>Press Here</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.btn}
        underlayColor="#5cb85c"
        onPress={customModal}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Press Here</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={button_press}>
        <View style={styles.btn}>
          <Text style={{ color: "black", fontSize: 20 }}>Press Here</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{update}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 100,
    width: "100%",
  },
  btn: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#428bca",
    marginVertical: 20,
  },
  text: {
    marginVertical: 50,
    fontSize: 40,
  },
  modal: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "10%",
    marginTop: "30%",
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { ChangeStateUsingTouchables };
