import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const JoinScreen = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <>
      <h1>Join</h1>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          placeholder="Room"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value)
          }}
        />
      </div>
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button type="submit" disabled={!name || !room}>
          Sign in
        </button>
      </Link>
    </>
  )
}

export default JoinScreen
