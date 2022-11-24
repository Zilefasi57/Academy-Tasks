import React, { Component } from 'react';
import Hero from './hero'
import About from './about'
import Service from './service'
import Contactme from './contactme'
import Footer from './footer'
class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <Hero />
        <About />
        <Service />
        <Contactme />
        <Footer /> 
      </>
    );
  }
}
 
export default App;