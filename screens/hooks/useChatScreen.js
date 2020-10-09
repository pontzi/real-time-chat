import React, {useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {LogBox} from 'react-native';
import Fire from '../../Fire';
const useChatScreen = (props) => {
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
  return chat;
};

export default useChatScreen;
