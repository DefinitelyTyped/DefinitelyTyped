import * as React from 'react';
import Select from 'react-select';
import { flavourOptions } from '../data';

export default class CustomIsOptionDisabled extends Component<*> {
  render () {
    return (
      <Fragment>
        <p>Disable all options that do not have a 'safe' rating, via the isOptionsDisabled fn prop</p>
        <Select
          defaultValue={flavourOptions[0]}
          isClearable
          isSearchable
          name="color"
          options={flavourOptions}
          isOptionDisabled={(option) => option.rating !== 'safe'}
        />
      </Fragment>
    );
  }
}
