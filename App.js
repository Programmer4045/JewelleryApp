import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login';
import SignupScreen from './signup';
import BottomTabs from './bottomTabs';

const Stack = createNativeStackNavigator();

const App = () => {
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();


    // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={BottomTabs} options={{headerShown:false}} />
    
    </Stack.Navigator>
  </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Dashboard"}>
      <Stack.Screen name="Dashboard" component={BottomTabs} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

  

export default App
