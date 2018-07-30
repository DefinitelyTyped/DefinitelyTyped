import * as React from 'react';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const Placeholder = (props: any) => {
  return (
    <components.Placeholder {...props}/>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ Placeholder }}
    placeholder={'custom placeholder component'}
    styles={{ placeholder: (base: any) => ({ ...base, fontSize: '1em', color: colourOptions[2].color, fontWeight: 400 }) }}
    options={colourOptions}
  />
);
