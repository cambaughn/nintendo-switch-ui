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
      selected: null,
      games: [],
    }
  }

  componentDidMount() {
    getGames(games => this.setState({ games }));
  }

  render() {
    return (
      <div style={styles.container}>
        <TopBar selected={true} />
        <GamesList games={this.state.games} />
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
