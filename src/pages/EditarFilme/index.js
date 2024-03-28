

if (operacao === "Editar") {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE clientes SET nome = ? WHERE id = ?",
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