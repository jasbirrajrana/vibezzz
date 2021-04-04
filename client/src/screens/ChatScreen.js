import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';
let socket;

const ChatScreen = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  let END_POINT = 'http://localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(END_POINT);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room }, ({ error }) => {
      alert(error);
    });
  }, [END_POINT, location.search]);
  return <></>;
};

export default ChatScreen;
