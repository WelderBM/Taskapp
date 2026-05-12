import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

const STORAGE_KEY = "@taskapp:tarefas";

export default function NewTask({ route, navigation }: any) {
  const tarefa = route.params?.tarefa;

  useEffect(()=> {
    
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.tag}>{tag}</Text>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
