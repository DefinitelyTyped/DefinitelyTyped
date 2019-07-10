import * as React from 'react';

import Select, { components } from 'react-select';
import { ColourOption, colourOptions, FlavourOption, groupedOptions } from '../data';

const groupStyles = {
  border: `2px dotted ${colourOptions[2].color}`,
  borderRadius: '5px',
  background: '#f2fcff'
};

const Group = (props: any) => (
  <div style={groupStyles}>
    <components.Group {...props}/>
  </div>
);

export default () => (
  <Select<ColourOption | FlavourOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Group }}
  />
);
