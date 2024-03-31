import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import AdcionarFilmes from './src/pages/AdcionarFilmes'
import EditarFilme from "./src/pages/EditarFilme";
import ExibirTodosFilmes from './src/pages/ExibirTodosFilmes';
import Home from "./src/pages/Home";
import PesquisaFilme from "./src/pages/PesquisaFilme";
import VisualizarFilmes from './src/pages/VisualizarFilme'

import { createNativeStackNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export default function App() {
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
