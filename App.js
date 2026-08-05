import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  StatusBar,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');

  const [mensagem, setMensagem] = useState(
    'Preencha os dados e clique no botão'
  );

  function apresentarAluno() {
    if (nome.trim() === '' || curso.trim() === '') {
      Alert.error('Erro: nome e/ou curso não preenchidos.');
      return;
    } else {
      setMensagem(`Olá ${nome}, seja bem-vindo ao curso de ${curso}!`);
    }
  }

  function limparDados() {
    setNome('');
    setCurso('');
    setMensagem('Preencha os dados e clique no botão');

    return;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#005CA9" barStyle="light-content" />
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://www.globalgiving.org/pfil/organ/99225/orglogo.jpg',
          }}
        />
        <Text style={styles.titulo}>Senai</Text>
        <Text style={styles.subtitulo}>Desenvolvimento de Sistema</Text>
        <Text style={styles.subtitulo}>Aprendendo react native</Text>

        <Text style={styles.label}>Nome do aluno</Text>
        <TextInput
          style={styles.input}
          placeholder="digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Nome do curso</Text>
        <TextInput
          style={styles.input}
          placeholder="digite seu curso"
          value={curso}
          onChangeText={setCurso}
        />

       
        <View style={styles.resultado}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    elevation: 6,
    shadowColor: '#000000',
    shadowRadius: 5,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#005ca9',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    margintop: 6,
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 12,
  },

});
