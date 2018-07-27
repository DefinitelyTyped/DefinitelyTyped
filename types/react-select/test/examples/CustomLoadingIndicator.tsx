import React, { Component } from 'react';
import Spinner from '@atlaskit/spinner';
import Tooltip from '@atlaskit/tooltip';
import AsyncSelect from '../../src/Async';
import { colourOptions } from '../data';

const LoadingIndicator = (props) => {
  return (
    <Tooltip content={'Custom Loader'}>
      <Spinner {...props} delay={0}/>
    </Tooltip>
  );
};

type State = {
  inputValue: string,
};

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class CustomLoadingIndicator extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        components={{ LoadingIndicator }}
      />
    );
  }
}
