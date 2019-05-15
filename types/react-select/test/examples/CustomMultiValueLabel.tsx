import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const MultiValueLabel = (props: any) => {
  return (
    <Tooltip content={'Customise your multi-value label component!'}>
      <components.MultiValueLabel {...props}/>
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueLabel }}
    styles={{ multiValueLabel: (base: any) => ({ ...base, backgroundColor: colourOptions[2].color, color: 'white' }) }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
