import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

const STORAGE_KEY = "@taskapp:tarefas";

export default function NewTask({ route, navigation }: any) {
  const tarefa = route.params?.tarefa;

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
    }
  }, [tarefa]);

  const salvarTarefa = async () => {
    if (titulo.trim() === "") {
      Alert.alert("Atenção", "Digite o título da tarefa.");
      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      const tarefas = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      let tarefasAtualizadas = [];

      if (tarefa) {
        tarefasAtualizadas = tarefas.map((item: any) => {
          const tarefaAtualizada = {
            ...item,
            titulo: titulo,
            descricao: descricao,
            etiqueta: tag,
          };
          item.id === tarefa.id ? tarefaAtualizada : item;
        });
      } else {
        const novaTarefa = {
          id: Date.now().toString(),
          titulo: titulo,
          descricao: "",
          etiqueta: "",
          concluida: false,
        };
        tarefasAtualizadas = [...tarefas, novaTarefa];
      }

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tarefasAtualizadas),
      );
      setTitulo("");
      setDescricao("");
      setTag("");
      navigation.goBack();
    } catch (error) {
      console.log("Erro ao salvar tarefa:", error);
      Alert.alert("Erro", "Não foi possível salvar a tarefa.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {tarefa ? "Editar Tarefa" : "Nova Tarefa"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título da tarefa"
        placeholderTextColor="#9CA3AF"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição da terefa"
        placeholderTextColor="#9CA3AF"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite uma tag"
        placeholderTextColor="#9CA3AF"
        value={tag}
        onChangeText={setTag}
      />

      <TouchableOpacity style={styles.button} onPress={salvarTarefa}>
        <Text style={styles.buttonText}>
          {tarefa ? "Salvar alterações" : "Salvar tarefa"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
