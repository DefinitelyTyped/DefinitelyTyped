import React from 'react';
import Tooltip from '@atlaskit/tooltip';
import Select, { components } from '../../src';
import { colourOptions } from '../data';

const Option = (props) => {
  return (
    <Tooltip content={'Customise your option component!'} truncateText>
      <components.Option {...props}/>
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ Option }}
    styles={{ option: (base) => ({ ...base, border: `1px dotted ${colourOptions[2].color}`, height: '100%' }) }}
    defaultValue={colourOptions[4]}
    options={colourOptions}
  />
);
