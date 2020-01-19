import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


const colors = ['#ccc', '#a00', '#0a0'];

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals =>
      [...currentGoals, { key: Math.random().toString(), value: enteredGoal, selectedColor: 0 }]
    );
    setIsAddMode(false);
  }

  const cleanList = () => {
    setCourseGoals([]);
  }

  const deleteItem = key => {
    setCourseGoals(currentGoals => currentGoals.filter(item => item.key !== key));
  }

  const cancelModal =() => {
    setIsAddMode(false);
  }

  const changeColor = index => {
    let selectedColor = courseGoals[index].selectedColor;
    selectedColor = selectedColor === 0 ? 2 : selectedColor === 1 ? 2 : 1;
    let allCourses = [...courseGoals];
    allCourses[index].selectedColor = selectedColor;
    setCourseGoals(allCourses);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.addModal}>
        <Button
          title="ADD new Goal"
          onPress={() => setIsAddMode(true)} />
      </View>
      <GoalInput
        addGoalHandler={addGoalHandler}
        cleanList={cleanList}
        visible={isAddMode}
        cancelModal={cancelModal} />
      <View style={styles.listComponent}>
        <FlatList //flatlist requer que cada item seja um objeto com uma propriedade 'key' ou 'id'. Usado para listas grandes, por performance
          data={courseGoals}
          keyExtractor={item => item.key}
          renderItem={itemData =>
            <GoalItem
              title={itemData.item.value}
              id={itemData.item.key}
              onChangeColor={() => changeColor(itemData.index)}
              onDeleteItem={deleteItem}
              color={colors[itemData.item.selectedColor]} />
          }
        />
        <View style={styles.save}>
          <Button title="Salvar" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    height: '90%'
  },
  containerList: {
    height: '80%'
  },
  save: {
    marginTop: 10
  },
  listComponent: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  addModal: {
    marginBottom: 10
  }
});
