/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/GoalItem';
import CreateGoalModal from './components/CreateGoalModal';

const App = () => {
  const [courseGoal, setCourseGoal] = useState('');
  const courseGoalId = useRef(0);
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleChangeText = (text) => {
    setCourseGoal(text);
  };

  const handleAddGoal = () => {
    setCourseGoals([
      ...courseGoals,
      {
        id: (courseGoalId.current++).toString(),
        value: courseGoal,
      },
    ]);
    setIsAddMode(false);

    console.log(courseGoals);
  };

  const handleDeleteGoal = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));

    console.log(courseGoals);
  };

  const turnOnAddMode = () => {
    setIsAddMode(true);
  };

  const turnOffAddMode = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.app}>
      <Button title="Add New Course Goal" onPress={turnOnAddMode} />
      <CreateGoalModal
        visible={isAddMode}
        styles={styles}
        handleChangeText={handleChangeText}
        value={courseGoal}
        handleAddGoal={handleAddGoal}
        handleClose={turnOffAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(item) => (
          <GoalItem
            styles={styles}
            goalId={item.item.id}
            value={item.item.value}
            handleDeleteGoal={handleDeleteGoal}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: 50,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
  listItem: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
    marginTop: 10,
  },
});

export default App;
