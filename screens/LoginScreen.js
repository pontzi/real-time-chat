import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = (props) => {
  const [state, setState] = useState({name: ''});
  const {name} = state;

  const continueToChat = () => {
    props.navigation.navigate('Chat', name);
  };
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9AFD9',
  },
});
export default LoginScreen;
