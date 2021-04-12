import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import {BrowserRouter} from 'react-router-dom';


// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<BrowserRouter><Products /></BrowserRouter>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});