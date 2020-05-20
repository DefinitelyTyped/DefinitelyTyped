import * as React from 'react';
import Select from 'react-select';
import { colourOptions } from '../data';

interface State {
  ignoreCase: boolean;
  ignoreAccents: boolean;
  trim: boolean;
  matchFrom: boolean;
}

const filterOptions = (candidate: any, input: string) => {
  if (input) {
    return candidate.value === customOptions[0].value;
  }
  return true;
};

const customOptions = [{ value: 'custom', label: 'Using a custom filter to always display this option on search' }, ...colourOptions];

export default class SelectCreateFilter extends React.Component<any, State> {
  render() {
    return (
      <Select
        defaultValue={customOptions[0]}
        isClearable
        isSearchable
        name="color"
        options={customOptions}
        filterOption={filterOptions}
      />
    );
  }
}
