import React from 'react';
import {View, TextInput, Button, Modal} from 'react-native';

function CreateGoalModal(props) {
  const {
    styles,
    visible,
    handleChangeText,
    handleAddGoal,
    handleClose,
    courseGoal,
  } = props;

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          placeholder="course goal"
          onChangeText={handleChangeText}
          value={courseGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancle" color="red" onPress={handleClose} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CreateGoalModal;
