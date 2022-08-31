import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [data, setData] = useState([]);
  const [result, setResult] = useState('');

  const handlePlus = () => {
    setResult(Number(text) + Number(text2));
  }

  const handleMinus = () => {
    setResult(Number(text) - Number(text2));
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Result: {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='number-pad'
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='number-pad'
        onChangeText={(text2) => setText2(text2)}
        value={text2}
      />
      <Button onPress={handlePlus} title="+" />
      <Button onPress={handleMinus} title="-" />
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
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});





