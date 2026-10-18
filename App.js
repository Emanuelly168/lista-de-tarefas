import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logoIcon}>📋</Text>
        <Text style={styles.logoText}>MyList</Text>
      </View>

      {/* Campo de entrada e botão */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione algo a sua lista"
          placeholderTextColor="#858585"
        />
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Contadores visuais */}
      <View style={styles.labelsContainer}>
        <View style={styles.labelGroup}>
          <Text style={styles.label}>Criadas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
        <View style={styles.labelGroup}>
          <Text style={styles.label}>Concluídas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoIcon: {
    fontSize: 30,
    marginRight: 8,
  },
  logoText: {
    color: '#32C5D2',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 6,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 8,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1E6FCE',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#32C5D2',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  counter: {
    color: '#FFFFFF',
    backgroundColor: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});