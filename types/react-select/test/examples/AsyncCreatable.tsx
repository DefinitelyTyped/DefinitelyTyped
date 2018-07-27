import * as React from 'react';

import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import { colourOptions } from '../data';

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

export default class WithPromises extends Component<*, State> {
  render() {
    return (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );
  }
}
