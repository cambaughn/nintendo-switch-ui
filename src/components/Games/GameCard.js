/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import SquareSelector from '../Selector/SquareSelector';
import colors from '../../util/colors';

const GameCard = ({ selected, game }) => {
  return (
    <div style={styles.container}>
      <SquareSelector selected={selected}>
        <div style={styles.card}>
          {game.title}
        </div>
      </SquareSelector>
    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    marginLeft: 15,
  },

  // --------------------- CARD

  card: {
    height: 180,
    width: 180,

    backgroundColor: colors.grey,
  },

}

export default GameCard;
