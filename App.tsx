import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => setEnteredGoal(enteredText);

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={style.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View></View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
