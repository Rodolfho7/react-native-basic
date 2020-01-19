import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addAndCleanInput = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addAndCleanInput} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.cancelModal} color="orange" />
          </View>
          <View style={styles.button}>
            <Button title="CLEAR" onPress={props.cleanList} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: '80%',
    padding: 10
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '33%'
  }
});

export default GoalInput;