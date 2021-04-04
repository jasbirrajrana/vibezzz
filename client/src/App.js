import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JoinScreen from './screens/JoinScreen';
import ChatScreen from './screens/ChatScreen';
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={JoinScreen} exact />
        <Route path="/chat" component={ChatScreen} />
      </Router>
    </>
  );
}

export default App;
