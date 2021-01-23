import React from 'react';
import './App.css';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <div className="container">
      <Route path='/' component={Menu}/>
      <Route exact path='/' component={Home}/>
      <Route path='/' component={Footer}/>
    
      </div>
    </main>
  );
}

export default App;