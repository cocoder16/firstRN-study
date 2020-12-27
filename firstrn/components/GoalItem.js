import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function GoalItem(props) {
  const {styles, goalId, value, handleDeleteGoal} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleDeleteGoal.bind(this, goalId)}>
      <View style={styles.listItem}>
        <Text>
          {goalId}: {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;
