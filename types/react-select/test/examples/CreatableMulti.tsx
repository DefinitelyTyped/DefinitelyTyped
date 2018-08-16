import * as React from 'react';

import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from '../data';

export default class CreatableMulti extends React.Component {
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }
  render() {
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        options={colourOptions}
      />
    );
  }
}
