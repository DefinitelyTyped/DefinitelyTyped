import * as React from 'react';
import Select, { components } from 'react-select';
import { Tooltip } from '../AtlaskitDummy';
import { colourOptions } from '../data';

const SelectContainer = ({ children, ...props }: any) => {
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

    styles={{ container: (base: any) => ({ ...base, backgroundColor: colourOptions[2].color, padding: 5 }) }}
    options={colourOptions}
  />
);
