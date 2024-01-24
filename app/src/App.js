import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './modules/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
