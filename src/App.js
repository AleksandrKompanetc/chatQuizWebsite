import React from 'react';
import AppRouter from './modules/appRouter/AppRouter';
import Navbar from './modules/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

