const atualizaRegistros = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM clientes",
          //'_array' é uma propriedade do objeto rows retornado pela consulta SQL, em rows._array, o '_' não se refere diretamente a rows, mas sim ao objeto retornado pela transação SQL.
          [],
          (_, { rows }) =>
            // O '_array' é uma propriedade desse objeto que contém os resultados da consulta em forma de array.
            setTodos(rows._array)
        );
      });
    } catch (error) {
      console.error("Erro ao buscar todos:", error);
    }
  };