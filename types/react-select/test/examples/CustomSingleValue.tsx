import React, { Component } from 'react';
import Select, { components } from '../../src';
import { colourOptions } from '../data';


const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
);

type State = {};

export default class CustomControl extends Component<*, State> {
  state = {};
  render() {
    return (
      <Select
        defaultValue={colourOptions[0]}
        isClearable
        styles={{ singleValue: (base) => ({ ...base, padding: 5, borderRadius: 5, background: colourOptions[2].color, color: 'white', display: 'flex' }) }}
        components={{ SingleValue }}
        isSearchable
        name="color"
        options={colourOptions}
      />
    );
  }
}
