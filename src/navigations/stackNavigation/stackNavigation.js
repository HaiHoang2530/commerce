import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp, Welcome} from '../../screens';
import TabBottom from '../bottomNavigation/bottomNavigation';
const Stack = createStackNavigator ();
export default function StackNavigaion () {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerTitle: false,
      }}
    >
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="tabbottom" component={TabBottom} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
