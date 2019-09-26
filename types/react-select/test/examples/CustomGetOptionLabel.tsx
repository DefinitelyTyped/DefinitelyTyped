import * as React from 'react';
import Select from 'react-select';
import { FlavourOption, flavourOptions } from '../data';

export default class CustomGetOptionLabel extends React.Component {
  private readonly getFlavourOptionLabel = (option: FlavourOption): string => `${option.label}: ${option.rating}`;

  render() {
    return (
      <React.Fragment>
      <p>Composing a display label from the label property and rating property in the options object</p>
      <Select
        defaultValue={flavourOptions[0]}
        isClearable
        isSearchable
        name="color"
        options={flavourOptions}
        getOptionLabel={this.getFlavourOptionLabel}
      />
      </React.Fragment>
    );
  }
}
