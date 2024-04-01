import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


import Home from "./src/pages/Home";
import CadastraFilme from "./src/pages/CadastraFilme";
import EditarFilme from "./src/pages/EditarFilme";
import ExibirFilme from "./src/pages/ExibirFilme";
import PesquisaFilme from "./src/pages/PesquisaFilme";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>

      <Stack.Navigator>

        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="CadastraFilme" component={CadastraFilme} />

        <Tab.Screen name="EditarFilme" component={EditarFilme} />

        <Tab.Screen name="ExibirFilme" component={ExibirFilme} />

        <Tab.Screen name="PesquisaFilme" component={PesquisaFilme} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },

});