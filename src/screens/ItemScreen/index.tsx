import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Tarefa } from "../HomeScreen";

const STORAGE_KEY = "@taskapp:tarefas";

export default function NewTask({ route, navigation }: any) {
  const tarefa = route.params?.tarefa;
  const [task, setTask] = useState<Tarefa | null>();

  useEffect(() => {
    if (tarefa) {
      setTask(task);
    }
  }, [tarefa]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task?.titulo}</Text>
      {task?.descricao && (
        <View>
          <Text style={styles.descricao}>descrição:</Text>
          <Text style={styles.descricao}>{task?.descricao}</Text>
        </View>
      )}
      {task?.tag && (
        <View>
          <Text style={styles.tag}>TAG</Text>
          <Text style={styles.tag}>{task?.tag}</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
