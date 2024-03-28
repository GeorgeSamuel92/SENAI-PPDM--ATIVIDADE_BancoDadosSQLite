import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { styleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button} from  'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView} from   'react-native-safe-area-context';

export default function Home() {

    const navigation = usenavigation();

    const navegaPesquisaFilmes = () => {
        navigation.navigate('PesquisaClientes');
    }

    const navegaExibirTodosFilmes = () => {
        navigation.navigate('ExibirTodosFilmes');
    }

    const navegaCadastrarFilme = () => {
        navigation.navigate('navegaCadastrarFilme');
    }

    const navegaEditarFilme = () => {
        navigation.navigate('navegaEditarFilme');
    }

    return (
        <SafeAreaView style={style.container}>
            <Text> Tela HOME</Text>

            <Button  title='Abri pesquisa por Filme' onPress= 
            { navegaPesquisaFilmes} style={styles.botao} />

            <Button  title='Exibir catalogo de Filmes' onPress=
            { navegaExibirTodosFilmes} style={styles.botao} />

        </SafeAreaView>
    )
}