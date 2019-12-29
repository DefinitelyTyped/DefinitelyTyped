import * as React from 'react';

import Select from 'react-select';
import { ColourOption, colourOptions, FlavourOption, groupedOptions } from '../data';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal' as 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center' as 'center',
};

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default () => (
  <Select<ColourOption | FlavourOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    formatGroupLabel={formatGroupLabel}
  />
);
