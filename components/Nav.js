// stack navigation code

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scroll from "./Scroll";
import FlatListComp from "./FlatListComp";
import ChangeState from "./ChangeState";
import BasicStyling from "./BasicStyling";
import AllButtonComp from "./AllButtonComp";
const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name="All components with buttons"
          component={AllButtonComp}
        />
        <Stack.Screen
          options={{ header: () => null }}
          name="Basic styling Component"
          component={BasicStyling}
        />
        <Stack.Screen
          options={{ header: () => null }}
          name="FlatList Component"
          component={FlatListComp}
        />
        <Stack.Screen
          options={{ header: () => null }}
          name="ChangeState Component"
          component={ChangeState}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
