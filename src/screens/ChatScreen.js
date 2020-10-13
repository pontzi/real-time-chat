import React from 'react';
import {SafeAreaView} from 'react-native';
import useChatScreen from './hooks/useChatScreen';
const ChatScreen = (props) => {
  const chat = useChatScreen(props);
  return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
};

export default ChatScreen;
