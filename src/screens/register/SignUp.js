import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {ButtonS} from '../../components';
import {styleSignUp} from './css';

export default function SignUp ({navigation}) {
  return (
    <View style={styleSignUp.container}>
      <View style={styleSignUp.inner}>
        <Text style={styleSignUp.textSignUp}>Sign Up</Text>
        <TextInput placeholder="Name" style={styleSignUp.textInput} />
        <TextInput placeholder="Email" style={styleSignUp.textInput} />
        <TextInput
          placeholder="Password"
          style={styleSignUp.textInput}
          secureTextEntry={true}
        />
        <View style={styleSignUp.button}>
          <ButtonS text="SIGN UP" onPress={()=>navigation.navigate('welcome')} />
        </View>
      </View>
    </View>
  );
}
