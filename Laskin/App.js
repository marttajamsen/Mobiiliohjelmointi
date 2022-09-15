import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const calculate = operator => {
    console.log(text, text2, operator);
    const [number1, number2] = [Number(text), Number(text2)];

    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    } else {
      let result = 0;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
      }
      setResult(result);

      const lol = `${number1} ${operator} ${number2} = ${result}`;
      setData([...data, lol]);
    }
    setText('');
    setText2('');
    initialFocus.current.focus();
  }



  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        ref={initialFocus}
        keyboardType='number-pad'
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        ref={initialFocus}
        keyboardType='number-pad'
        onChangeText={(text2) => setText2(text2)}
        value={text2}
      />
      <Button onPress={() => calculate('+')} title='+' />
      <Button onPress={() => calculate('-')} title='-' />
      <Text>History</Text>
      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) =>
          <Text>{item}</Text>}

      />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});





