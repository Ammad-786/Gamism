import React from 'react';
import { Navbar } from "./components/Navbar";
import AboutUs from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
    </div>
  );
}

export default App;
