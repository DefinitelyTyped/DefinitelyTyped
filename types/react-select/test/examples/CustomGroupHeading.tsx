import * as React from 'react';

import Select, { components } from 'react-select';
import { ColourOption, colourOptions, FlavourOption, groupedOptions } from '../data';
import { EditorPanelIcon, Tooltip } from '../AtlaskitDummy';

const groupStyles = {
  border: `2px dotted ${colourOptions[2].color}`,
  color: 'white',
  background: colourOptions[2].color,
  padding: '5px 0px',
  display: 'flex',
};

const GroupHeading = (props: any) => (
  <div style={groupStyles}>
    <components.GroupHeading {...props}/>
    <Tooltip content="Custom GroupHeading Component">
      <EditorPanelIcon/>
    </Tooltip>
  </div>
);

export default () => (
  <Select<ColourOption | FlavourOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ GroupHeading }}
    styles={{ groupHeading: (base: any) => ({ ...base, flex: '1 1', color: 'white', margin: 0 }) }}
  />
);
