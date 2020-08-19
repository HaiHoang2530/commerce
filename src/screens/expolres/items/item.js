import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../../themes/color';
import normalize from 'react-native-normalize';
export default function Item({item}) {
  return (
    <TouchableOpacity style={styItem.container}>
      <Image style={styItem.Img} source={{uri: item.avatar}} />
      <Text style={styItem.textName} numberOfLines={1} >{item.name}</Text>
      <Text style={styItem.textcompany} numberOfLines={1}>{item.company}</Text>
      <Text style={styItem.textSize}>{item.size}$</Text>
    </TouchableOpacity>
  );
}

const styItem = StyleSheet.create ({
  container: {
    height: normalize (265),
    width: normalize (160),
    backgroundColor: Colors.White,
    margin: 8,
  },
  Img: {
    height: '70%',
    width: '100%',
  },
  textName:{
      fontSize:16,
      fontWeight:'bold',
      margin:normalize(8),
  },
  textcompany:{
      fontSize:14,
      color:Colors.Black,
      opacity:0.5,
      marginLeft:normalize(8),
      marginRight:normalize(8)
  },
  textSize :{
      fontSize:14,
      color:Colors.Green,
      marginLeft:normalize(8),
  }
});
