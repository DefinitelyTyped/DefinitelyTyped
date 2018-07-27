import React from 'react';
import Select, { components } from '../../src';
import Tooltip from '@atlaskit/tooltip';
import { colourOptions } from '../data';

const SelectContainer = ({ children, ...props }) => {
  return (
    <Tooltip content={'customise your select container'} delay={0}>
      <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ SelectContainer }}

    styles={{ container: (base) => ({ ...base, backgroundColor:colourOptions[2].color, padding: 5 }) }}
    options={colourOptions}
  />
);
