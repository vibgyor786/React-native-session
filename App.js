import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import TabNavigationComp from "./components/TabNavigationComp";
import Nav from "./components/Nav";
import DrawerNav from "./components/DrawerNav";
export default function App() {
  return <DrawerNav />;
}

const styles = StyleSheet.create({});
