import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const [easterEggActive, setEasterEggActive] = useState(false);

  return (
   <MainLayout>
   <View style={styles.container}>
      <Text>Name of App: ToDo App</Text>
      <TouchableOpacity onPress={() => setEasterEggActive(!easterEggActive)}>
        <Text>Your Name: [York Li]</Text>
      </TouchableOpacity>
      {easterEggActive && (
        <Text style={styles.easterEgg}>You found the Easter egg! 🥚</Text>
      )}
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </View>
    </MainLayout>
  );
}



const styles = StyleSheet.create({
  container: {
   
  },
  easterEgg: {
   
  },
  
});

export default AboutScreen;
