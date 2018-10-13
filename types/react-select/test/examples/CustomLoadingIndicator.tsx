import * as React from 'react';
import { Spinner, Tooltip } from '../AtlaskitDummy';
import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from '../data';

const LoadingIndicator = (props: any) => {
  return (
    <Tooltip content={'Custom Loader'}>
      <Spinner {...props} delay={0}/>
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
        components={{ LoadingIndicator }}
      />
    );
  }
}
