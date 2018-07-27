import React, { Component } from 'react';
import Tooltip from '@atlaskit/tooltip';
import AsyncSelect from '../../src/Async';
import { colourOptions } from '../data';

const LoadingMessage = (props) => {
  return (
    <Tooltip content={'Custom Loading Message'}>
      <div {...props} style={props.getStyles('loadingMessage', props)}>
          {props.children}
      </div>
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
        styles={{ loadingMessage: (base) => ({ ...base, backgroundColor: colourOptions[2].color, color: 'white' }) }}
        components={{ LoadingMessage }}
      />
    );
  }
}
