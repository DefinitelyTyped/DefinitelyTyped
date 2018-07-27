import React, { Component } from 'react';

import Select, { components } from '../../src';
import { colourOptions } from '../data';
const controlStyles = {
  borderRadius: '1px solid black',
  padding: '5px',
  background: colourOptions[2].color,
  color: 'white'
};

const ControlComponent = (props) => (
  <div style={controlStyles}>
    {<p>Custom Control</p>}
    <components.Control {...props} />
  </div>
);

type State = {};

export default class CustomControl extends Component<*, State> {
  state = {};
  render() {
    return (
      <Select
        defaultValue={colourOptions[0]}
        isClearable
        components={{ Control: ControlComponent }}
        isSearchable
        name="color"
        options={colourOptions}
      />
    );
  }
}
