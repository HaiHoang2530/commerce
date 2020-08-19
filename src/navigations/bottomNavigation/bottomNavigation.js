import React from 'react';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import {Cart, ExpolreOne, Profile} from '../../screens';
const Bottom = createMaterialBottomTabNavigator ();
export default function TabBottom () {
  return (
    <Bottom.Navigator
      activeColor="#00C569"
      barStyle={{backgroundColor: '#ffffff'}}
    >
      <Bottom.Screen
        name="expolre"
        component={ExpolreOne}
        options={{
          tabBarLabel: 'Expolre',
        }}
      />
      <Bottom.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Bottom.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Bottom.Navigator>
  );
}
