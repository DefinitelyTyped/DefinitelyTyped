import * as React from 'react';

import Select, { components } from 'react-select';
import { ColourOption, colourOptions, FlavourOption, groupedOptions } from '../data';

const menuHeaderStyle = {
  padding: '8px 12px',
  background: colourOptions[2].color,
  color: 'white',
};

const MenuList = (props: any) => {
  return (
    <components.MenuList {...props}>
      <div style={menuHeaderStyle}>
        Custom Menu List
      </div>
      {props.children}
    </components.MenuList>
  );
};

export default () => (
  <Select<ColourOption | FlavourOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ MenuList }}
  />
);
