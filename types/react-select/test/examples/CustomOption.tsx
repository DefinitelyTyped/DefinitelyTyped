import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const Option = (props: any) => {
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
    styles={{ option: (base: any) => ({ ...base, border: `1px dotted ${colourOptions[2].color}`, height: '100%' }) }}
    defaultValue={colourOptions[4]}
    options={colourOptions}
  />
);
