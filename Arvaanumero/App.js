import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

let secret;
let guesses;

export default function App() {
  const [input, setInput] = useState('');
  const [guidance, setGuidance] = useState('');

  const init = () => {
    setGuidance('Guess a number between 1-100');
    guesses = 0;
    secret = Math.floor(Math.random() * 100) + 1;
    console.log('Secret:', secret);
  }

  useEffect(() => {
    init();
  }, [])


  const makeGuess = () => {
    const guess = Number(input);
    console.log('Guess:', guess);
    guesses++;
    if (guess < secret) {
      setGuidance(`Your guess ${guess} is too low`);
    } else if (guess > secret) {
      setGuidance(`Your guess ${guess} is too high`);
    } else {
      Alert.alert(`You guessed the number in ${guesses} guesses`);
      init();
    }
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guidance}</Text>
      <TextInput
        style={styles.input} value={input} keyboardType='number-pad' onChangeText={text => setInput(text)}></TextInput>
      <Button title="MAKE GUESS" onPress={makeGuess}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontsize: 20
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '10%',
    margin: 10,
    fontsize: 16,

  }
});
