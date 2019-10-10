import { Component } from 'react';
import NumericInput = require('react-numeric-input');

export class NumericInputTest extends Component {
  render() {
    return (
      <NumericInput
        min={-10}
        max={(comp) => (comp.state.value || 1) + 1}
        format={(x) => `EUR ${x}`}
        parse={(s) => parseFloat(s.replace(/EUR /, ''))}
        step={(comp, dir) => (dir === NumericInput.DIRECTION_UP ? 9 : 1)}
        style={{wrap: {color: 'orange'}}}
        className="hello"
      />
    );
  }
}
