import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../../themes/color';

export default function ButtonSuccess({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={Colors.White}
    >
      <Text style={styles.textbutton}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create ({
  button: {
    height: 50,
    backgroundColor: Colors.Green,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textbutton: {
    fontSize: 14,
    color: Colors.White,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
