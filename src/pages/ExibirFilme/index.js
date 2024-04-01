import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExibirFilme() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Todos os filmes cadastrados:</Text>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "Center",
  },
  title: {
    color: "black",
  },
  
});
