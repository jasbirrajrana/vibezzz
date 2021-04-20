import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JoinScreen from './screens/JoinScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
function App() {
  return (
    <>
      <Router>
        <Route path="/join" component={JoinScreen} />
        <Route path="/chat" component={ChatScreen} />
        <Route path="/" component={LoginScreen} exact />
      </Router>
    </>
  )
}

export default App
