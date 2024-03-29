import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button } from "react-native";
import { useNavigation, useRoute, StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

if (operacao === "Editar") {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE filmes SET nome = ? WHERE id = ?",
        [inputText, id],
        (_, { rowsAffected }) => {
          if (rowsAffected === 1)
            Alert.alert("Sucesso", " O filme atualizado com sucesso");
          else if (rowsAffected === 0)
            Alert.alert("Alerta", "Nenhum registro foi alterado");

          setInputText("");
          atualizaRegistros();
          setOperacao("incluir");
        },
        (_, error) => {
          console.error("Erro ao adicionar o filme:", error);
          Alert.alert("Erro", "Ocorreu um erro ao adicionar o filme.");
        }
      )
    });
  }

  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE filmes SET nome =? WHERE id =?",
      [inputText, id],
      (_, { rowsAffected }) => {
        console.log(rowsAffected);
        setInputText("");
        atualizaRegistros();
      },
      (_, error) => {
        console.error("Erro ao atualizar o filme:", error);
        Alert.alert("Erro", "Ocorreu um erro ao atualizar o filme.");
      }
    );
  });