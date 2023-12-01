// AddScreen.jsx
import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';
import AddForm from '../components/AddForm.jsx';

function AddScreen({ navigation }) {
  const addTask = task => {
    // Pass the added task back to HomeScreen
    navigation.navigate('Home', { addedTask: task });
  };

  return (
    <MainLayout>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFE0', padding: 10 }}>
        <AddForm style={{ padding: 20, backgroundColor: '#fff', borderRadius: 10 }} 
        addTask={addTask} />
        {/* Add some space between AddForm and the button */}
        <View style={{ marginTop: 20 }}>
          <Button title="Back Home"  color="#007bff" onPress={() => navigation.navigate('Home')} />
          <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}

export default AddScreen;
