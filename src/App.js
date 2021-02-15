import React from 'react';
import './App.css';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';

function App() {
  return (
    <main className='App'>
      <div className="container">
       <Route path='/' component={Menu}/>
       <Route exact path='/' component={Home}/> 
      <Route path='/products' exact component = {Products}/> 
      <Route path='/product/:productId' component = {ProductDetails} />
      <Route path='/' component={Footer}/>
      </div>
    </main>
  );
}

export default App;