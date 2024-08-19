import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesProduct from './Hooks/Routes'; // Adjust import as necessary
import UseContext from './Hooks/UseContext'; // Adjust import as necessary

function App() {
  return (
    <BrowserRouter>
      <UseContext>
      <RoutesProduct />
      </UseContext>
    </BrowserRouter>
  );
}

export default App;
