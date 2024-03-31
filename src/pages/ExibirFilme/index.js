import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";


export default function ExibirTodosFilmes() {

    const [todos, setTodos] = useState([]);

    const ExibirTodosFilmes = () => {
        try {
          db.transaction((tx) => {
            tx.executeSql(
              "SELECT * FROM filmes",
              [],
              (_, { rows }) =>

                setTodos(rows._array)
            );
          });
        } catch (error) {
          console.error("Erro ao buscar todos:", error);
        }
      };
}

