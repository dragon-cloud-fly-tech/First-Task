import React from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/index';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='bg-white container mx-auto'>
        <Navbar />
        <Body />
        <Footer />
      </div>
   
    </>
  );
}

export default App;
