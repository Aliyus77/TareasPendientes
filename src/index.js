// // //con la versión 18 de React.
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/index';

// // //Forma vieja. 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <App />,  
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 







