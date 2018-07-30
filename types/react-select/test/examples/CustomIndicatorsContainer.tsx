import * as React from 'react';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const IndicatorsContainer = (props: any) => {
  return (
    <div style={{ background: colourOptions[2].color }}>
      <components.IndicatorsContainer {...props}/>
    </div>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ IndicatorsContainer }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
