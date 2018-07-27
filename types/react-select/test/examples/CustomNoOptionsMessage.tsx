import React, { Component } from 'react';
import Tooltip from '@atlaskit/tooltip';
import Select, { components } from '../../src';
import { colourOptions } from '../data';
const msgStyles = {
  background: colourOptions[2].color,
  color: 'white'
};

const NoOptionsMessage = (props) => {
  return (
    <Tooltip content="Custom NoOptionsMessage Component">
      <components.NoOptionsMessage {...props} />
    </Tooltip>
  );
};

type State = {};

export default class CustomNoOptionsMessage extends Component<*, State> {
  state = {};
  render() {
    return (
      <Select
        isClearable
        components={{ NoOptionsMessage }}
        styles={{ noOptionsMessage: (base) => ({ ...base, ...msgStyles }) }}
        isSearchable
        name="color"
        options={[]}
      />
    );
  }
}
