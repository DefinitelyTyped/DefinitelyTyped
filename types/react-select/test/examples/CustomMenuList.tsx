import React from 'react';

import Select, { components } from '../../src';
import { colourOptions, groupedOptions } from '../data';

const menuHeaderStyle = {
  padding: '8px 12px',
  background: colourOptions[2].color,
  color: 'white',
};

const MenuList = (props) => {
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
  <Select
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ MenuList }}
  />
);
