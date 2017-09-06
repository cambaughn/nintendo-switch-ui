/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import Moment from 'react-moment';

import colors from '../../util/colors';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null,
    }

    this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    this.getTime();
  }

  getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let displayDate = `${hours}:${minutes}`;

    this.setState({ currentTime: date })
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={this.props.selected ? {...styles.profilePhotoSelector, ...styles.selected} : styles.profilePhotoSelector}>
          <div style={styles.profilePhotoWrapper}>

          </div>
        </div>

        <div style={styles.infoGroup}>
          <div style={styles.timeGroup}>
            <Moment format={'h:mm'} interval={10000} style={styles.time} />
            <Moment format={'A'} interval={10000} style={styles.ampm} />
          </div>
          <i className="fa fa-wifi" aria-hidden="true" style={styles.icon}></i>
          <i className="fa fa-battery-three-quarters" aria-hidden="true" style={styles.icon}></i>
        </div>
      </div>
    )
  }
}


const styles = {
  // --------------------- CONTAINER

  container: {
    width: '100%',
    height: '20%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // --------------------- PROFILE PHOTO
  profilePhotoSelector: {
    marginLeft: 40,
    borderRadius: 100,
  },

  selected: {
    border: `3px solid ${colors.lightblue}`,
  },

  profilePhotoWrapper: {
    width: 40,
    height: 40,

    backgroundColor: colors.grey,
    borderRadius: 100,
    border: '2px solid white',

  },

  // --------------------- INFO
  infoGroup: {
    marginRight: 40,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // --------------------- TIME

  timeGroup: {

  },

  time: {
    fontSize: '1.4em',
    fontFamily: 'Saira Condensed',
    letterSpacing: '0.15em',
  },

  ampm: {
    fontSize: '1em',
    fontFamily: 'Saira Condensed',
    letterSpacing: '0.1em',
  },

  // --------------------- ICONS

  icon: {
    marginLeft: 30,
    fontSize: '1.2em',

    paddingTop: 2,
  },

}

export default TopBar;
