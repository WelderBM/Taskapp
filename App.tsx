import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, ITEAM! 🚀</Text>
      <Text style={styles.subtitulo}>Módulo 06 — Aula 01</Text>
      <Text style={styles.subtitulo}>Introdução ao React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f4f7',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff9500',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#777',
  },
});