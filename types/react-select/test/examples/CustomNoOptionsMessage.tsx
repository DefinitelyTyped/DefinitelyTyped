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
      // Without the type argument, `OptionType` is inferred as `never` from the
      // `options` attribute of type `never[]`, and `Select.defaultProps` (of
      // type `Props<any>`) fails to be assignable to the instantiated props
      // type, `Props<never>`.  This issue shouldn't come up in real code where
      // the `options` attribute isn't a literal empty array.
      <Select<{ label: string; value: string }>
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
