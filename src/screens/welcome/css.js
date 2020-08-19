import {StyleSheet} from 'react-native';
import Colors from '../../themes/color';
import normalize from 'react-native-normalize';
const styleWelcome = StyleSheet.create ({
  container: {
    flex: 1,
    margin: normalize (16),
  },
  form: {
    height: normalize (430),
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
  },
  viewSign: {
    flexDirection: 'row',
    margin: normalize (16),
    justifyContent: 'space-between',
  },
  welcome: {
    height: normalize (100),
  },
  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.Gray1,
    fontSize: 14,
  },
  textSign: {
    fontSize: 18,
    color: Colors.Green,
  },
  formInput: {
    margin: normalize (16),
  },
  textInput: {
    height: normalize (70),
    borderBottomWidth: 1,
    borderBottomColor: Colors.Green,
    marginBottom: normalize (16),
    marginTop: normalize (16),
  },
  textform: {
    fontSize: 14,
    marginBottom: normalize (32),
    marginTop: normalize (16),
    marginStart: normalize (200, 'width'),
  },
  textOr: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginTop: normalize (16),
  },
  touchble: {
    height: normalize (50),
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.Gray,
    marginTop: normalize (16),
    marginBottom: normalize (16),
    alignItems: 'center',
    borderRadius:5,
  },
  touchableImg: {
    width: normalize (32),
    height: normalize (32),
    marginLeft: normalize (16),
  },
  textFacebook: {
    width: '70%',
    paddingLeft: normalize (40),
    textAlign: 'center',
  },
});

export {styleWelcome};
