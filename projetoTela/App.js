import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Usuário');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
      <View style={styles.fixToText}>
      <Button
        title="Salvar"
          onPress={() => Alert.alert('Botão')}
        color = "red"
      />
    </View>
    
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;