import { View, Text } from 'react-native';
import { styles } from "./styles"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, ITEAM! 🚀</Text>
      <Text style={styles.subtitulo}>Módulo 06 — Aula 01</Text>
      <Text style={styles.subtitulo}>Introdução ao React Native</Text>
    </View>
  );
}

