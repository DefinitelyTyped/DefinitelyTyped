import * as React from 'react';

import Select, { components } from 'react-select';
import { colourOptions } from '../data';
const controlStyles = {
  borderRadius: '1px solid black',
  padding: '5px',
  background: colourOptions[2].color,
  color: 'white'
};

const ControlComponent = (props: any) => (
  <div style={controlStyles}>
    {<p>Custom Control</p>}
    <components.Control {...props} />
  </div>
);

export default class CustomControl extends React.Component {
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
