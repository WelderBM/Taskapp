import React, { useState, useCallback } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import TaskItem from '../../components/TaskItem';
import { styles } from './styles';

const STORAGE_KEY = '@taskapp:tarefas';

export type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};

export default function HomeScreen({ navigation }: any) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const carregarTarefas = async () => {
    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      if (dadosSalvos) {
        setTarefas(JSON.parse(dadosSalvos));
      } else {
        const listaInicial: Tarefa[] = [
          { id: '1', titulo: 'Estudar React Native', concluida: false },
          { id: '2', titulo: 'Criar primeira tela', concluida: false },
          { id: '3', titulo: 'Montar lista de tarefas', concluida: false },
        ];
        setTarefas(listaInicial);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listaInicial));
      }
    } catch (error) {
      console.log('Erro ao carregar tarefas:', error);
    }
  };

  const salvarTarefas = async (novaLista: Tarefa[]) => {
    try {
      setTarefas(novaLista);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
    } catch (error) {
      console.log('Erro ao salvar tarefas:', error);
    }
  };

  const concluirTarefa = async (id: string) => {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    await salvarTarefas(novaLista);
  };

  const excluirTarefa = async (id: string) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    await salvarTarefas(novaLista);
  };

  const editarTarefa = (tarefa: Tarefa) => {
    navigation.navigate('NewTask', { tarefa });
  };

  useFocusEffect(
    useCallback(() => {
      carregarTarefas();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas tarefas</Text>

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('NewTask')}
      >
        <Text style={styles.addButtonText}>Adicionar tarefa</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <TaskItem
            titulo={item.titulo}
            concluida={item.concluida}
            onConcluir={() => concluirTarefa(item.id)}
            onExcluir={() => excluirTarefa(item.id)}
            onEditar={() => editarTarefa(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
