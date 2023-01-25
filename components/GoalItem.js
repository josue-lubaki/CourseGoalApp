import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  const { id, text, onDeleteItem } = props;

  // const deleteGoalHandler = () => {
  //   onDeleteItem(id);
  // };

  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default GoalItem;
