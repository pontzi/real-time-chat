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
  const [state, setState] = useState({username: ''});
  const {username} = state;

  const continueToChat = () => {
    props.navigation.navigate('Chat', username);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  messageLogo: {
    width: 100,
    height: 100,
  },
  shape: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -110,
    top: -60,
  },
  data: {
    marginHorizontal: 32,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 30,
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 23,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: 'bold',
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginTop: 64,
  },
  continueToChat: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2edffc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  arrowImage: {
    width: 70,
    height: 70,
  },
});
export default LoginScreen;
