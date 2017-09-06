/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import TopBar from '../TopBar/TopBar';
import GamesList from '../Games/GamesList';
import WidgetList from '../Widgets/WidgetList';
import BottomBar from '../BottomBar/BottomBar';

const Home = () => {
  return (
    <div style={styles.container}>
      <TopBar />
      <GamesList />
      <WidgetList />
      <BottomBar />
    </div>
  )
}


let scale = 0.7;

const styles = {
  // --------------------- CONTAINER

  container: {
    backgroundColor: '#EBEBEB',
    width: 1280 * scale,
    height: 720 * scale,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default Home;
