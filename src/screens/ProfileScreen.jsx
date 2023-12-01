import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function ProfileScreen({ navigation, route }) {
  

  return (
   <MainLayout>
   <View style={styles.container}>
      <Text style={styles.heading}>A+ Getter</Text>
        <Text style={styles.subHeading}>Member 1 Name: York Li</Text>
        <Text style={styles.subHeading}>Member 2 Name: Greg Wu</Text>
        <Text style={styles.subHeading}>Member 3 Name: Max Hui</Text>
        <Text>Programme: Software Development</Text>
        <Text>Semester: 3</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>

      <Button title="Back Home" onPress={() => navigation.navigate('Home')} />
    </View>
    </MainLayout>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFE0',
  },
 heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  
});


export default ProfileScreen;
