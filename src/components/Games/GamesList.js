/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import GameCard from './GameCard';

const GamesList = ({ games, selectedGame, selectedRow }) => {
  return (
    <div style={styles.container}>
      <div style={styles.slider}>
        { games.map((game, index) => (
          <GameCard game={game} key={game.title} selected={selectedRow && selectedGame === index} />
        ))}
      </div>
    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    width: '100%',
    height: 190,
    backgroundColor: 'salmon',

    position: 'relative',
  },

  // --------------------- SLIDER

  slider: {
    position: 'absolute',
    left: 50,
    top: 0,
    height: 190,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}

export default GamesList;
