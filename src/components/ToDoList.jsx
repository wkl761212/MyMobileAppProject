import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3, 
  },
  taskText: {
    fontSize: 16,
  },
     
});

export default ToDoList;
