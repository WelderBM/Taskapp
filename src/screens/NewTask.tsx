import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@taskapp:tarefas';

export default function NewTask({ navigation }: any) {
  const [titulo, setTitulo] = useState('');

  const salvarNovaTarefa = async () => {
    if (titulo.trim() === '') {
      Alert.alert('Atenção', 'Digite o título da tarefa.');
      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

      const tarefas = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      const novaTarefa = {
        id: Date.now().toString(),
        titulo: titulo,
      };

      const tarefasAtualizadas = [...tarefas, novaTarefa];

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tarefasAtualizadas)
      );

      setTitulo('');

      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Erro ao salvar nova tarefa:', error);
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título da tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Button title="Salvar tarefa" onPress={salvarNovaTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
});