import * as React from 'react';

import Select from 'react-select';
import { ColourOption, colourOptions } from '../data';

function filterOption(arg: ColourOption, rawInput: string): boolean {
    return true;
}

export default () => (
  <Select<ColourOption>
    defaultValue={colourOptions[1]}
    options={colourOptions}
    filterOption={filterOption}
  />
);
