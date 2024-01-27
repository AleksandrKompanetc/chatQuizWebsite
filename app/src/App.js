import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './modules/navbar/Navbar';
import AppRouter from './modules/appRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
