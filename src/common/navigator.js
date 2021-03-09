import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import AddItemScreen from "../screens/addItemScreen";
import Welcome from "../screens/welcome";

import { COLORS } from "../styles/colors";

const Tab = createBottomTabNavigator();


export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = focused
                ? "info-with-circle"
                : "info";
            } else if (route.name === "Shop") {
              iconName = "shop";
            }
            return <Entypo name={iconName} size={size} color={COLORS.blue} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.black,
          inactiveTintColor: COLORS.light_grey,
        }}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Shop" component={AddItemScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}