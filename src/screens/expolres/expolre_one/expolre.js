import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {styExplore} from './css';
import Item from '../items/item';

const API ='https://5ceb729177d47900143b897f.mockapi.io/e-commerce';
export default function Expolre () {

  const [produc,setProduc] = useState();
  useEffect(()=>{
    getProduc();
  },[produc])
  const getProduc = () =>{
    fetch(API)
    .then(response =>response.json())
    .then(responseJson => setProduc(responseJson))
    .catch(error =>console.log(error));
  }
  return (
    <View style={styExplore.container}>
      <View style={styExplore.viewSeach}>
        <TextInput
          style={styExplore.textIput}
          placeholder="Search"
          inlineImageLeft="../../../assets/images/search.png"
        />
        <TouchableOpacity style={styExplore.touchbaleCamera}>
          <Image source={require ('../../../assets/images/camera.png')} />
        </TouchableOpacity>
      </View>
      <View style={styExplore.viewCate}>
        <Text style={styExplore.textCategori}>Categories</Text>
        <SafeAreaView>
          <ScrollView style={styExplore.scrollview} horizontal={true}>
            <View style={styExplore.viewItem}>
              <Image
                source={require ('../../../assets/images/shoes_men.png')}
                style={styExplore.scrollviewImg}
              />
              <Text>Men</Text>
            </View>
            <View style={styExplore.viewItem}>
              <Image
                source={require ('../../../assets/images/shoes_women.png')}
                style={styExplore.scrollviewImg}
              />
              <Text>Women</Text>
            </View>
            <View style={styExplore.viewItem}>
              <Image
                source={require ('../../../assets/images/light.png')}
                style={styExplore.scrollviewImg}
              />
              <Text>Devices</Text>
            </View>
            <View style={styExplore.viewItem}>
              <Image
                source={require ('../../../assets/images/headphone.png')}
                style={styExplore.scrollviewImg}
              />
              <Text>Gadgets</Text>
            </View>
            <View style={styExplore.viewItem}>
              <Image
                source={require ('../../../assets/images/game.png')}
                style={styExplore.scrollviewImg}
              />
              <Text>Game</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Text style={styExplore.textBest}> Best Selling</Text>
        <FlatList
        style={styExplore.flatlist}
        data={produc}
        renderItem={({item})=><Item item={item}/>}
        numColumns={2}
        keyExtractor={(item)=>item.id}
        />
      </View>
    </View>
  );
}
