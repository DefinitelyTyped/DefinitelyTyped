import * as React from 'react';
import { EmojiIcon, Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const MultiValueRemove = (props: any) => {
  return (
    <Tooltip content={'Customise your multi-value remove component!'} truncateText>
      <components.MultiValueRemove {...props}>
        <EmojiIcon primaryColor={colourOptions[2].color}/>
      </components.MultiValueRemove>
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueRemove }}
    styles={{ multiValueRemove: (base: any) => ({ ...base, border: `1px dotted ${colourOptions[2].color}`, height: '100%' }) }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
