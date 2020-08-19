import {StyleSheet} from 'react-native';
import Colors from '../../themes/color';
import normalize from 'react-native-normalize';
const styleSignUp = StyleSheet.create ({
  container: {
    flex: 1,
    margin: normalize (16),
  },
  inner: {
    height: normalize (500),
    backgroundColor: Colors.White,
  },
  textSignUp: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: normalize (16),
  },
  textInput: {
    height: normalize (70),
    borderBottomWidth: 1,
    borderBottomColor: Colors.Green,
    margin: normalize (16),
  },
  button: {
    marginLeft: normalize (16),
    marginRight: normalize (16),
    marginVertical: normalize (72),
  },
});
export {styleSignUp};
