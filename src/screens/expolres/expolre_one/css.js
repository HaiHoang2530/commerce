import {StyleSheet} from 'react-native';
import Colors from '../../../themes/color';
import normalize from 'react-native-normalize';
const styExplore = StyleSheet.create ({
  container: {
    flex: 1,
  },
  viewSeach: {
    flexDirection: 'row',
  },
  textIput: {
    height: normalize (40),
    width: '80%',
    backgroundColor: Colors.Gray,
    margin: normalize (16),
    borderRadius: 30,
    paddingLeft: 20,
  },
  touchbaleCamera: {
    height: normalize (40),
    width: normalize (40),
    borderRadius: 50,
    backgroundColor: Colors.Green,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCate: {
    margin: normalize (16),
  },
  textCategori: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBest:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:normalize(16) 
  },
  scrollview: {
    width: '100%',
    height: normalize (100),
    marginBottom: normalize (16),
    marginTop: normalize (16),
  },
  viewItem: {
    width: normalize (60),
    height: normalize (90),
    margin: normalize (16),

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  scrollviewImg: {
    height: normalize (48),
    width: normalize (48),
  },
  flatlist:{
    width:'100%',
    height:'60%',
  }
});
export {styExplore};
