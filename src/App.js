import React from 'react';
import { Navbar } from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
