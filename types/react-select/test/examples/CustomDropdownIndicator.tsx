// @flow

import * as React from 'react';
import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components } from 'react-select';
import { colourOptions } from '../data';

const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <EmojiIcon
        primaryColor={colourOptions[2].color}
      />
    </components.DropdownIndicator>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ DropdownIndicator }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
