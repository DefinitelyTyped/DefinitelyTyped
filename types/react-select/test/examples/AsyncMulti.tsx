import * as React from 'react';

import AsyncSelect from 'react-select/async';
import { colourOptions } from '../data';

interface State {
  inputValue: string;
}

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class AsyncMulti extends React.Component<any, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }
  render() {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );
  }
}
