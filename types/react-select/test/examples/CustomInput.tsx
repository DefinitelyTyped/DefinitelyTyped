import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';
import { InputProps } from 'react-select/src/components/Input';

interface CustomInputProps {extraProp: string; }

const Input = (props: InputProps & CustomInputProps) => {
  if (props.isHidden) {
    return <components.Input {...props}/>;
  }
  return (
    <div style={{ border: `1px dotted ${colourOptions[2].color}` }}>
      <Tooltip content={`Custom Input with extra prop: ${props.extraProp}`}>
        <components.Input {...props}/>
      </Tooltip>
    </div>
  );
};

export default () => (
  <Select<any, CustomInputProps>
    closeMenuOnSelect={false}
    components={{ Input }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    extraProp="so extra!"
    options={colourOptions}
  />
);
