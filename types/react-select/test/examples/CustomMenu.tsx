import React, { Fragment } from 'react';

import Select, { components } from '../../src';
import { colourOptions, groupedOptions } from '../data';

function getLength (options) {
  return options.reduce((acc, curr) => {
    if (curr.options) return acc + getLength(curr.options);
    return acc + 1;
  }, 0);
};

const menuHeaderStyle = {
  padding: '8px 12px',
};

const Menu = (props) => {
  const optionsLength = getLength(props.options);
  return (
    <Fragment>
      <div style={menuHeaderStyle}>
        Custom Menu with {optionsLength} options
      </div>
      <components.Menu {...props}>
        {props.children}
      </components.Menu>
    </Fragment>
  );
};

export default () => (
  <Select
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Menu }}
  />
);
