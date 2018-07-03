import React, { Component } from 'react';
import Logo from './logo';
import './App.css';
import Header from './Header';
import Body from './Body';
import Bottom from './Bottom'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header /> 
          <main className="expanded row">
            <Body />
            <Bottom />
          </main>
        <Logo/>
        <Footer />
      </div>
    );
  }
}

export default App;