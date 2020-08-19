import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {ButtonS} from '../../components';
import {styleWelcome} from './css';

export default function Welcome({navigation}) {
  const HandleSignIN = () => {
    navigation.navigate ('signup');
  };
  return (
    <View style={styleWelcome.container}>
      <View style={styleWelcome.form}>
        <View style={styleWelcome.viewSign}>
          <View>
            <Text style={styleWelcome.textWelcome}>Welcome,</Text>
            <Text style={styleWelcome.text}>Sign in to Continue</Text>
          </View>
          <View>
            <Text style={styleWelcome.textSign} onPress={()=>navigation.navigate('signup')}>Sign</Text>
          </View>
        </View>
        <View style={styleWelcome.formInput}>
          <TextInput placeholder="Email" style={styleWelcome.textInput} />
          <TextInput
            placeholder="Password"
            style={styleWelcome.textInput}
            secureTextEntry={true}
          />
          <Text style={styleWelcome.textform}>Forgot Password?</Text>
          <ButtonS
            text="Sign In"
            onPress={() => navigation.navigate ('tabbottom')}
          />
        </View>
      </View>
      <Text style={styleWelcome.textOr}>-OR-</Text>
      <View>
        <TouchableOpacity style={styleWelcome.touchble}>
          <Image
            style={styleWelcome.touchableImg}
            source={require ('../../assets/images/facebook.png')}
          />
          <Text style={styleWelcome.textFacebook}>Sign In with Facabook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleWelcome.touchble}>
          <Image
            style={styleWelcome.touchableImg}
            source={require ('../../assets/images/google.png')}
          />
          <Text style={styleWelcome.textFacebook}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
