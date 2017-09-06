import React, { Component } from 'react';

import './App.css';

import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Home />
      </div>
    );
  }
}

const styles = {
  // --------------------- CONTAINER

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: window.innerHeight,
  },
}

export default App;
