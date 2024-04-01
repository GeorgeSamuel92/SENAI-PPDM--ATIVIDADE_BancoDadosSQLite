import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function Pesquisa() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pesquise o filme desejado</Text>
      <Text style={styles.labelInput}></Text>
      <TextInput
        placeholder="Digite o nome do filme"
        style={styles.input}
      ></TextInput>

      <Button title="pesquisar"></Button>
    </SafeAreaView>
  );
}

const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItens: "centers",
    justifyContent: "center",
  },
  title: {
    color: "black",
  },
  input: {
    width: 300,
    height: 40,
    boderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  labelInput: {
    fontSize: 18,
    marginBottom: 1,
    color: "white",
    marginBottom: 5,
  },
});
