import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const handleGuess = () => {
    setResult((Math.floor(Math.random() * 100) + 1) > Number(text));
  }
  const [result, setResult] = useState('');


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Guess a number between 1-100</Text>
      <Text>Your guess {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='number-pad'
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button onPress={handleGuess} title="MAKE GUESS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1
  }
});
