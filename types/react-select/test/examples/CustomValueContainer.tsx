import * as React from 'react';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const ValueContainer = ({ children, ...props }: any) => (
  <components.ValueContainer {...props}>
    {children}
  </components.ValueContainer>
);

export default class CustomControl extends React.Component {
  render() {
    return (
      <Select
        defaultValue={colourOptions[0]}
        isClearable
        styles={{
          singleValue: (base: any) => ({ ...base, color: 'white' }),
          valueContainer: (base: any) => ({ ...base, background: colourOptions[2].color, color: 'white', width: '100%' }),
        }}
        components={{ ValueContainer }}
        isSearchable
        name="color"
        options={colourOptions}
      />
    );
  }
}
