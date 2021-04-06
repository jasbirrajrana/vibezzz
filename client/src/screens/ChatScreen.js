import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { io } from 'socket.io-client'
let socket

const ChatScreen = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  let END_POINT = 'http://localhost:5000'
  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(END_POINT)
    setName(name)
    setRoom(room)
    socket.emit('join', { name, room }, () => {})
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [END_POINT, location.search])
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])
  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  console.log(message, 'message')
  console.log(messages, 'messages======')

  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          placeholder="send message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onKeyPress={(e) => {
            // eslint-disable-next-line no-unused-expressions
            e.key === 'Enter' ? sendMessage(e) : null
          }}
        />
      </div>
    </>
  )
}

export default ChatScreen
