// Tab navigation code 

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlatListComp from "./FlatListComp";
import ChangeState from "./ChangeState";
import BasicStyling from "./BasicStyling";
import AllButtonComp from "./AllButtonComp";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function TabNavigationComp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Text>{route.name}</Text>;
          },
          tabBarActiveTintColor: "#5cb85c",
          //   tabBarActiveBackgroundColor: "#d9534f",
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Flat List component"
          component={FlatListComp}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={"bar-chart-outline"}
                size={35}
                color={"#5bc0de"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Change State component"
          component={ChangeState}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={"apps-outline"} size={35} color={"#5bc0de"} />
            ),
          }}
        />
        <Tab.Screen
          name="Basic styling name"
          component={BasicStyling}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={"backspace-outline"}
                size={35}
                color={"#5bc0de"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
