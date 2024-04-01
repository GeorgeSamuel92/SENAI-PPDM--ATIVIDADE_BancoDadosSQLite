import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Alert, Button } from "react-native";
import { SafeAreaView } from "@react-navigation/native";
import { usenavigation } from "@react-navigation/native";
import { DatabaseConnection } from "../../database/database";

const db = new DatabaseConnection.getConnections();

export default function CadastroFilme() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handleCadastro = () => {
    if (
      nome.trim() === "" ||
      genero.trim() === "" ||
      classificacao.trim() === ""
    ) {
      Alert.alert(
        "Atenção",
        "Por favor, preencha todos os campos para cadastra o filme"
      );
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO filmes (nome_filme, genero, classificacao) VALUES (?, ?, ?)",
        [nome, genero, classificacao],

        (_, { rowsAffected }) => {
          console.log(rowsAffected);
          setNome("");
          setGenero("");
          setClassificacao("");

          Alert.alert("Sucesso", "Filme filme cadastrado com sucesso.");
        },
        (_, error) => {
          console.error("Error ao cadastra filme:", error);
          Alert.alert("Error", "Ocorreu um erro ao cadastra o filme.");
        }
      );
    });
  };

  return (
    <SafeAreaView style={style.container}>
      <Text>Cadastro de Filme</Text>

      <TextInput
        placeholder="Digite o nome do filme"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        placeholder="Digite o gênero do filme"
        value={genero}
        onChangeText={(text) => setGenero(text)}
      />

      <TextInput
        placeholder="Digite a classificacao do filme"
        value={classificacao}
        onChangeText={(text) => setClassificacao(text)}
      />

      <Button title="Cadastro" onPress={handleCadastro} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignitens: "center",
    padding: 20,
  },
});
