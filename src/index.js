import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tabs from "./components/Tab";

ReactDOM.render(
  <React.StrictMode>
      <App time="5"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <p>test</p>
//   </React.StrictMode>, 
//   document.getElementById('Tabs')
// );

reportWebVitals();
