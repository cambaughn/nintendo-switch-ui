/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import TopBar from '../TopBar/TopBar';
import GamesList from '../Games/GamesList';
import WidgetList from '../Widgets/WidgetList';
import BottomBar from '../BottomBar/BottomBar';

import { getGames } from '../../util/games';
import colors from '../../util/colors';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      selectedGame: 0,
      selectedMenuButton: 0,
      selectedRow: 1,
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleUpDown = this.handleUpDown.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
  }

  componentDidMount() {
    getGames(games => this.setState({ games }));
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
      this.handleUpDown(e.keyCode);
    } else if (e.keyCode === 37 || e.keyCode === 39) {
      this.handleLeftRight(e.keyCode);
    }
  }

  handleUpDown(keyCode) {
    if (keyCode === 38) { // UP
      this.setState({ selectedRow: this.state.selectedRow > 0 ? this.state.selectedRow - 1 : 0 })
    } else if (keyCode === 40) { // DOWN
      this.setState({ selectedRow: this.state.selectedRow < 3 ? this.state.selectedRow + 1 : 3 })
    }
  }

  handleLeftRight(keyCode) {
    if (keyCode === 37) { // LEFT

    } else if (keyCode === 39) { // RIGHT
      
    }
  }


  render() {
    return (
      <div style={styles.container}>
        <TopBar selected={this.state.selectedRow === 0} />
        <GamesList
          games={this.state.games}
          selectedGame={this.state.selectedGame}
          selectedRow={this.state.selectedRow === 1} />
        <WidgetList />
        <BottomBar />
      </div>
    )
  }
}


let scale = 0.6;

const styles = {
  // --------------------- CONTAINER

  container: {
    backgroundColor: colors.grey,
    width: 1280 * scale,
    height: 720 * scale,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    overflow: 'hidden',
  },
}

export default Home;
