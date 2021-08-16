import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './component/navbar/navbar';
import Home from './container/home/home';
import Fish from './container/fish/fish';

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Fish" component={Fish}/>
     </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
