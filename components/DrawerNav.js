// Drawer navigation code

import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import FlatListComp from "./FlatListComp";
import ChangeState, { ChangeStateUsingTouchables } from "./ChangeState";
import Ionicons from "react-native-vector-icons/Ionicons";
import BasicStyling from "./BasicStyling";
import AllButtonComp from "./AllButtonComp";
import AsyncStorageComp from "./AsyncStorageComp";
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        //    initialRouteName="Flat List Component"

        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          headerTitleAlign: "center",
          //   headerTitle: () => <Text>This is header</Text>,

          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerPosition: "left",
          edgeWidth: 200,
          drawerStyle: {
            // backgroundColor: "#5cb85c",
            width: 300,
          },
        }}
      >
        <Drawer.Screen name="Async storage" component={AsyncStorageComp} />
        <Drawer.Screen
          initialParams={{ Message: "Message from change state component" }}
          options={{
            title: "Change state component",
          }}
          name="Change state component"
          component={ChangeState}
        />
        <Drawer.Screen name="Flat List Component" component={FlatListComp} />

        <Drawer.Screen name="Basic Component" component={BasicStyling} />
        <Drawer.Screen
          name="Change state using diffrent buttons"
          component={ChangeStateUsingTouchables}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
