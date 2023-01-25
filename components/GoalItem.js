import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  const { id, text, onDeleteItem } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
