import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = (props) => {
  const [state, setState] = useState({name: ''});
  const {name} = state;

  const continueToChat = () => {
    props.navigation.navigate('Chat', name);
  };
  return (
    <LinearGradient
      colors={['#D9AFD9', '#97D9E1']}
      style={styles.container}></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginScreen;
