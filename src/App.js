import React from 'react';
import { Navbar } from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
