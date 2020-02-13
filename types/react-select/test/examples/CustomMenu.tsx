import * as React from 'react';

import Select, { components } from 'react-select';
import { ColourOption, colourOptions, FlavourOption, groupedOptions } from '../data';

function getLength(options: any) {
  return options.reduce((acc: any, curr: any) => {
    if (curr.options) return acc + getLength(curr.options);
    return acc + 1;
  }, 0);
}

const menuHeaderStyle = {
  padding: '8px 12px',
};

const Menu = (props: any) => {
  const optionsLength = getLength(props.options);
  return (
    <React.Fragment>
      <div style={menuHeaderStyle}>
        Custom Menu with {optionsLength} options
      </div>
      <components.Menu {...props}>
        {props.children}
      </components.Menu>
    </React.Fragment>
  );
};

export default () => (
  <Select<ColourOption | FlavourOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Menu }}
  />
);
