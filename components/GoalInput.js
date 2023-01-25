import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const { onAddGoal } = props;
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) return;

    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
