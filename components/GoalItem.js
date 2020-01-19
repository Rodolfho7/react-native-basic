import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onChangeColor} onLongPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={[styles.listItem, {backgroundColor:props.color}]}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10
  }
});


export default GoalItem;