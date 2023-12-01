import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import StudyTaskList from '../components/StudyTaskList.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import { Text } from 'react-native-elements';

function HomeScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (route.params && route.params.addedTask) {
      const newTask = route.params.addedTask;

      setTasks((prevTasks) => [...prevTasks, newTask]);
      navigation.setParams({ addedTask: null });

      // Save tasks to AsyncStorage
      saveTasksToAsyncStorage([...tasks, newTask]);
    }
  }, [route.params]);

  const onCompleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Save updated tasks to AsyncStorage
    saveTasksToAsyncStorage(updatedTasks);
  };

  const saveTasksToAsyncStorage = async (tasksArray) => {
    try {
      // Convert tasksArray to JSON-formatted string
      const tasksJson = JSON.stringify(tasksArray);

      // Save the JSON string to AsyncStorage
      await AsyncStorage.setItem('tasks', tasksJson);

      console.log('Tasks saved to AsyncStorage');
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          // Parse the JSON string to get the tasks array
          const parsedTasks = JSON.parse(storedTasks);
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error('Error loading tasks from AsyncStorage:', error);
      }
    };

    loadTasks();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <MainLayout>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFE0', padding: 10 }}>
        <Text h4>Study Tasks</Text>
        <StudyTaskList style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 5,
         shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, 
         shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 10 }}
          tasks={tasks} onCompleteTask={onCompleteTask} />
        <Button title="Add Study Task" color="#007bff" onPress={() => navigation.navigate('Add')} />
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
