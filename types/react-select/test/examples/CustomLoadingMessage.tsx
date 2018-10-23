import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from '../data';

const LoadingMessage = (props: any) => {
  return (
    <Tooltip content={'Custom Loading Message'}>
      <div {...props} style={props.getStyles('loadingMessage', props)}>
          {props.children}
      </div>
    </Tooltip>
  );
};

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

export default class CustomLoadingIndicator extends React.Component<any, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }
  render() {
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        styles={{ loadingMessage: (base: any) => ({ ...base, backgroundColor: colourOptions[2].color, color: 'white' }) }}
        components={{ LoadingMessage }}
      />
    );
  }
}
