import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import UserSelectionScreen from './screens/UserSelectionScreen';
import PersonalDetailsScreen from './screens/PersonalDetailsScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '520754834383-7pje9foqmteflrcr88adatrnm7lgbfib.apps.googleusercontent.com',
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="UserSelection" component={UserSelectionScreen} />
        <Stack.Screen name="Profile" component={PersonalDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





