import * as React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ColourOption, colourOptions } from '../data';

export default function AnimatedMulti() {
  return (
    <Select<ColourOption>
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
