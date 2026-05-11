import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type TaskItemProps = {
  titulo: string;
  concluida: boolean;
  onConcluir: () => void;
  onExcluir: () => void;
  onEditar: () => void;
};

export default function TaskItem({
  titulo,
  concluida,
  onConcluir,
  onExcluir,
  onEditar,
}: TaskItemProps) {
  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, concluida && styles.concluida]}>
        {titulo}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnEditar} onPress={onEditar}>
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btnComum, concluida ? styles.btnDesfazer : styles.btnConcluir]} 
          onPress={onConcluir}
        >
          <Text style={styles.btnText}>
            {concluida ? 'Desfazer' : 'Concluir'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnExcluir} onPress={onExcluir}>
          <Text style={styles.btnText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
