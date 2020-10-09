import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles/LoginScreenStyle';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = (props) => {
  const [state, setState] = useState({username: ''});
  const {username} = state;

  const continueToChat = () => {
    props.navigation.navigate('Chat', {username});
  };
  return (
    <LinearGradient colors={['#D9AFD9', '#97D9E1']} style={styles.container}>
      <View style={styles.shape}></View>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.messageLogo}
            source={{
              uri: 'https://i.ibb.co/c8gCSf1/burbuja-de-chat.png',
            }}
          />
        </View>
        <View style={styles.data}>
          <Text style={styles.username}>Username</Text>

          <TextInput
            style={styles.input}
            placeholder="Type your username"
            onChangeText={(username) => setState({...state, username})}
            value={state.username}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.continueToChat}
            onPress={continueToChat}>
            <Image
              style={styles.arrowImage}
              source={{uri: 'https://i.ibb.co/PNVLgTV/flecha-derecha.png'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
