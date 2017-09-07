/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import colors from '../../util/colors';

class SquareSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      light: true,
    }

    this.handleStyle = this.handleStyle.bind(this);
  }

  componentDidMount() {
    setInterval( () => this.setState({ light: !this.state.light}), 1500)
  }

  componentWillReceiveProps() {

  }

  handleStyle() {
    return this.state.light ? styles.container : {...styles.container, ...styles.selected};
  }

  render() {
    let style = this.props.selected ? this.handleStyle() : {};

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  // --------------------- CONTAINER

  container: {
    border: `4px solid ${colors.lightblue}`,
    transition: 'all 1500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  },

  selected: {
    border: `4px solid ${colors.darkblue}`,
  }
}

export default SquareSelector;
