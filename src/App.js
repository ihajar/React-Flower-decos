import React from 'react';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">      
      <Router>      
        <Switch>
          <Route path="/chat/:leaf">
            <Header backButton="/chat"/>
            <ChatScreen/>
            
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>        
      </Router>
    
     
    </div>
  );
}

export default App;
