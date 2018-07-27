// @flow

import React from 'react';
import Tooltip from '@atlaskit/tooltip';
import Select, { components } from '../../src';
import { colourOptions } from '../data';

const MultiValueContainer = (props) => {
  return (
    <Tooltip content={'Customise your multi-value container!'}>
      <components.MultiValueContainer {...props}/>
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueContainer }}
    styles={{ multiValue: (base) => ({ ...base, border: `2px dotted ${colourOptions[2].color}` }) }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
