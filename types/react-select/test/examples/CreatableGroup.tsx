import * as React from 'react';

import CreatableSelect from 'react-select/creatable';
import { ColourOption, groupedOptions, FlavourOption } from '../data';

export default class CreatableGroup extends React.Component {
  handleIsValidNewOption = (inputValue: any, value: any, groups: any) => {
    for (const group of groups) {
      console.group(`Group: ${group.label}`);
      for (const option of group.options) {
        console.log(`Option: ${option.label}`);
      }
      console.groupEnd();
    }

    return true;
  }
  render() {
    return (
      <CreatableSelect<ColourOption | FlavourOption>
        isValidNewOption={this.handleIsValidNewOption}
        options={groupedOptions}
      />
    );
  }
}
