import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Button,
} from "react-native";


export default function CadastroFilme() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [operacao, setOperacao] = useState("incluir");
  const [id, setId] = useState(null);

  const CadastroFilme = () => {
    if (inputText.trim() === " ") {
      Alert.alert(
        "Erro",
        "Por favor, insira um texto válido para adicionar o filme"
      );
      return;
    }

    if (operacao === "incluir") {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO filmes (nome) VALUES (?)",
          [inputText],
          (_, { rowsAffected }) => {
            console.log(rowsAffected);
            setInputText(" ");
            atualizaRegistros();
          },
          (_, error) => {
            console.error("Erro ao adicionar o filme:", error);
            Alert.alert("Erro", "Ocorreu um erro ao adicionar o filme.");
          }
        );
      });

// inclusão de edição dos dados filmes

    } else if (operacao === "Editar") {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE filme SET nome = ? WHERE id = ?",
          [inputText, id],
          (_, { rowsAffected }) => {
            if (rowsAffected === 1)
              Alert.alert("Sucesso", "Cliente atualizado com sucesso");
            else if (rowsAffected === 0)
              Alert.alert("Alerta", "Nenhum registro foi alterado");

            setInputText("");
            atualizaRegistros();
            setOperacao("incluir");
          },

          (_, error) => {
            console.error("Erro ao adicionar cliente:", error);
            Alert.alert("Erro", "Ocorreu um erro ao adicionar o cliente.");
          }
        );
      });
    }

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE clientes SET nome =? WHERE id =?",
        [inputText, id],
        (_, { rowsAffected }) => {
          console.log(rowsAffected);
          setInputText("");
          atualizaRegistros();
        },
        (_, error) => {
          console.error("Erro ao atualizar cliente:", error);
          Alert.alert("Erro", "Ocorreu um erro ao atualizar o cliente.");
        }
      );
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Digite um novo cliente"
          />

          <Button
            title={
              operacao === "incluir"
                ? "Salvar Novo Registro"
                : "Salvar Alteração"
            }
            onPress={incluiCliente}
          />

          <Text style={styles.title}>Clientes Cadastrados</Text>
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.containerScroll}>
            {/* A propriedade key é usada pelo React para identificar de forma única cada elemento na lista, o que é crucial para que o React possa otimizar a renderização e o desempenho. */}
            {todos.map((cliente) => (
              <View key={cliente.id} style={styles.clienteItem}>
                <Text>{cliente.nome}</Text>
                <Text>{cliente.id}</Text>

                <View style={styles.buttonTable}>
                  <TouchableOpacity
                    onPress={() => {
                      buttonPress(cliente.nome),
                        setId(cliente.id),
                        setOperacao("Editar");
                    }}
                  >
                    <FontAwesome6 name="pen-to-square" size={24} color="blue" />
                  </TouchableOpacity>

                  {/* Dentro do onPress do botão, colocamos um alert perguntando ao usuário se deseja excluir o registro selecionado */}

                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        "Atenção!",
                        "Deseja excluir o registro selecionado?",
                        [
                          {
                            text: "OK",
                            onPress: () => excluiCliente(cliente.id),
                          },
                          {
                            text: "Cancelar",
                            onPress: () => {
                              return;
                            },
                          },
                        ]
                      );
                    }}
                  >
                    <FontAwesome6 name="trash" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Atenção!",
              "Deseja excluir o Banco de dados do Sistema? Essa ação não pode ser desfeita!",
              [
                {
                  text: "OK",
                  onPress: () => deleteDatabase(),
                },
                {
                  text: "Cancelar",
                  onPress: () => {
                    return;
                  },
                },
              ]
            );
          }}
        >
          <FontAwesome6 name="eraser" size={50} color="red" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
