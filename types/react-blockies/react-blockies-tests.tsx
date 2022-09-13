import * as React from 'react';
import Blockies from 'react-blockies';

class TestMinimumBlockie extends React.Component {
  render() {
    return (
      <Blockies
        seed="Jeremy"
      />
    );
  }
}

class TestFullBlockie extends React.Component {
  render() {
    return (
      <Blockies
        seed="Jeremy"
        size={10}
        scale={3}
        color="#dfe"
        bgColor="#ffe"
        spotColor="#abc"
        className="identicon"
      />
    );
  }
}
