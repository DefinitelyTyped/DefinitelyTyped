import * as React from 'react';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const SingleValue = ({ children, ...props }: any) => (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
);

export default class CustomControl extends React.Component {
    render() {
    return (
      <Select
        defaultValue={colourOptions[0]}
        isClearable
        styles={{ singleValue: (base: any) => ({ ...base, padding: 5, borderRadius: 5, background: colourOptions[2].color, color: 'white', display: 'flex' }) }}
        components={{ SingleValue }}
        isSearchable
        name="color"
        options={colourOptions}
      />
    );
  }
}
