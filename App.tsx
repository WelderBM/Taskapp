import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem';

// 1. Dados da lista
const tarefas = [
  { id: '1', titulo: 'Estudar React Native' },
  { id: '2', titulo: 'Criar primeira tela' },
  { id: '3', titulo: 'Montar lista de tarefas' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskApp</Text>

      <FlatList
        data={tarefas}
        renderItem={({ item }) => <TaskItem titulo={item.titulo} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  listContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});
