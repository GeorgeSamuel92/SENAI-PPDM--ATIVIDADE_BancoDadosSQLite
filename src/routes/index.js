import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import StackRoutes from "../pages/Home";
import CadastroFilme from "../pages/CadastroFilme";
import EditarFilme from "../pages/EditarFilme";

import { createNativeStackNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackRoutes}
          options={{
            title: "Tela Inicial",
            headerTintColor: "red",

            headerStyle: {
              backgroundColor: "green",
            },

            tabBarIcon: ({ color = "red", size }) => {
              return (
                <FontAwesome name="home" color={"red"} size={size}>
                  {" "}
                </FontAwesome>
              );
            },
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
