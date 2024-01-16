import React from 'react'
import { Footer, Possibility, Features, WhatMuadhG, Header } from './containers';
import { Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatMuadhG />
      <Features />
      <Possibility />
      <Footer />
    </div>
  )
}

export default App