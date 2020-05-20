import * as React from 'react';
import { Tooltip } from '../AtlaskitDummy';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';
const msgStyles = {
  background: colourOptions[2].color,
  color: 'white'
};

const NoOptionsMessage = (props: any) => {
  return (
    <Tooltip content="Custom NoOptionsMessage Component">
      <components.NoOptionsMessage {...props} />
    </Tooltip>
  );
};

export default class CustomNoOptionsMessage extends React.Component {
  render() {
    return (
      <Select
        isClearable
        components={{ NoOptionsMessage }}
        styles={{ noOptionsMessage: (base: any) => ({ ...base, ...msgStyles }) }}
        isSearchable
        name="color"
        options={[]}
      />
    );
  }
}
