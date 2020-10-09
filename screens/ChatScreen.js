import React, {useState, useEffect} from 'react';
import {SafeAreaView, LogBox} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../Fire';

const ChatScreen = (props) => {
  const [state, setState] = useState({messages: []});
  useEffect(() => {
    LogBox.ignoreAllLogs();
    Fire.get((message) =>
      setState((previous) => ({
        ...state,
        messages: GiftedChat.append(previous.messages, message),
      })),
    );

    return () => {
      Fire.off();
    };
  }, []);
  const getUser = () => {
    return {
      _id: Fire.uid,
      name: props.route.params.username,
    };
  };
  const userData = getUser();

  const chat = (
    <GiftedChat messages={state.messages} onSend={Fire.send} user={userData} />
  );
  return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
};

export default ChatScreen;
