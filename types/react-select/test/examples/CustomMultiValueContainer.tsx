import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const MultiValueContainer = (props: any) => {
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
    styles={{ multiValue: (base: any) => ({ ...base, border: `2px dotted ${colourOptions[2].color}` }) }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
